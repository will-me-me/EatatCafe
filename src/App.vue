<template>
  <v-app>
    <v-main>
      <v-snackbar
        :color="user.snackbarColor"
        outlined
        :value="true"
        top
        absolute
        v-model="user.snackbar"
        :timeout="user.timeout"
      >
        <p class="text-center">
          {{ user.message }}
        </p>

        <template v-slot:action="{ attrs }">
          <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="user.snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <nav-app-bar />

      <router-view v-slot="{ Component }">
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import NavAppBar from "./components/NavAppBar.vue";
import { UseuserStore } from "@/store/UserStore";
import { onMounted } from "vue";

const user = UseuserStore();

onMounted(() => {
  user.fetchCurrentUser();
});

// export default {
//   components: {
//     NavAppBar,
//   },
//   name: "App",

//   data: () => ({
//     //
//   }),
// };
</script>
<style scoped>
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
