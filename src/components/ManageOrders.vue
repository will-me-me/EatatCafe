<template>
  <div>
    <v-divider></v-divider>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card hover>
            <v-card-title class="text-center text-uppercase text-caption">
              total users {{ user.totalUsers }}
            </v-card-title>

            <v-card-text
              class="text-center"
              style="
                font-size: 45px;
                line-height: 25px;
                text-align: left;
                color: #f67e08;
                text-transform: uppercase;
              "
            >
              <v-progress-circular
                :rotate="360"
                :size="170"
                :width="15"
                :value="user.totalUsers"
                color="teal"
              >
                {{ user.totalUsers }}
              </v-progress-circular>
            </v-card-text>
          </v-card>
        </v-col>
        <v-spacer></v-spacer>

        <v-col cols="12" sm="6" md="4">
          <v-card hover>
            <v-card-title class="text-center text-uppercase text-caption">
              total Orders {{ user.totalOrders }}
            </v-card-title>
            <v-card-text
              class="text-center"
              style="
                font-size: 45px;
                line-height: 25px;
                text-align: left;
                color: #f67e08;
                text-transform: uppercase;
              "
            >
              <v-progress-circular
                :rotate="90"
                :size="170"
                :width="15"
                :value="user.totalOrders"
                color="red"
              >
                {{ user.totalOrders }}
              </v-progress-circular>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <!-- {{ user.orders }} -->
    <!-- {{ user.headersToDisplay }} -->
    <v-container fluid>
      <v-data-table
        :headers="user.headersToDisplay.text"
        :items="user.orders"
        class="elevation-1"
        items-per-page="5"
      >
        <template v-slot:top>
          <v-toolbar flat color="teal">
            <v-toolbar-title>Orders</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>

            <v-btn class="mb-2" text active> Orders </v-btn>
          </v-toolbar>
        </template>

        <template v-slot:item.is_approved="{ item }">
          <v-chip
            v-if="item.is_approved"
            color="green"
            text-color="white"
            label
            small
          >
            Approved
          </v-chip>
          <v-chip
            v-else
            color="red"
            text-color="white"
            label
            small
            class="green-border"
            @click="approveOrder(item._id)"
          >
            Pending
          </v-chip>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script setup>
import { UseuserStore } from "@/store/UserStore";
import { onMounted } from "vue";
const user = UseuserStore();

const getUsers = async () => {
  user.fetchUsers();
};
const getTOtalUsers = async () => {
  user.fetchTotalUsers();
};

const getTotalOrders = async () => {
  user.fetchTotalOrders();
};
const getOrders = async () => {
  user.fetchOrders();
};

const approveOrder = async (id) => {
  await user.approveOrderbyID(id);
};

onMounted(async () => {
  await getUsers();
  await getTOtalUsers();
  await getTotalOrders();
  await getOrders();

  user.interval = setInterval(() => {
    if (user.totalUsers && user.totalOrders === 1000) {
      return user.totalOrders && user.totalUsers;
    }
    user.totalOrders && user.totalUsers;
  }, 1000);
});
</script>

<style scoped>
.v-progress-circular {
  margin: 1.5rem;
}
.green-border {
  border: 2px solid rgb(231, 107, 107);
}
</style>
