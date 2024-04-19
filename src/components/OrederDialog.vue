<template>
  <v-dialog max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline"
          >{{ user.greatingsDependingontheTime }}
          {{ user.CurrentUserName }}</span
        >
      </v-card-title>
      <v-card-title class="text-center">
        <span class="headline">New Order</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-select
                v-model="user.value"
                :items="user.items"
                chips
                label="Select a dessert"
                filled
              ></v-select>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field
                v-model="user.pieces"
                label="pieces"
                type="number"
                min="0"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" text @click="MakeOrder">Order Now</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { UseuserStore } from "@/store/UserStore";
import { onMounted } from "vue";

const user = UseuserStore();

const MakeOrder = (order) => {
  order = {
    value: user.value,
    pieces: user.pieces,
  };
  user.addOrder(order);
  user.fetchOrders();
  user.dialog = false;
};
const close = () => {
  user.dialog = false;
};
onMounted(() => {});
</script>
