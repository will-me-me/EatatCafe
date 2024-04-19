<template>
  <v-row>
    <v-col>
      <v-app-bar height="100" app color="transparent" flat="flat">
        <v-app-bar-nav-icon flat="flat">
          <v-avatar class="avatar-container" tile>
            <v-img
              src="/src/assets/smart bites-logos.jpeg"
              alt="Vuetify Logo"
              max-height="40"
              max-width="40"
              class="blurred-image"
            ></v-img>
            <v-img
              src="/src/assets/bites-logos_transparent.png"
              alt="Vuetify Logo"
              max-height="40"
              max-width="40"
            ></v-img>
          </v-avatar>
        </v-app-bar-nav-icon>
        <v-btn href="#orders" text flat color="#F67E08" class="custom-btn ma-6"
          >Orders</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          @click="scrollTo('contact')"
          text
          flat
          color="#F67E08"
          class="custom-btn ma-6"
          >Contact</v-btn
        >
        <v-btn
          @click="scrollTo('menu')"
          text
          flat
          color="#F67E08"
          class="custom-btn ma-6"
          >Menu</v-btn
        >
        <v-btn
          @click="scrollTo('about')"
          text
          flat
          color="#F67E08"
          class="custom-btn ma-6"
          >About Us</v-btn
        >
        <v-btn
          color="white"
          rounded
          style="background-color: #f67e08"
          @click="OpenOrderDialog"
        >
          <v-icon color="white" class="mr-4">mdi-checkbox-blank-circle</v-icon>
          Order Now
        </v-btn>
      </v-app-bar>
    </v-col>
    <oreder-dialog v-model="dialog" />
  </v-row>
</template>

<script>
import OrederDialog from "./OrederDialog.vue";
export default {
  // props: {
  //   source: String,
  //   caption: String,
  // },

  components: {
    OrederDialog,
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    scrollTo(id) {
      // If on the home page, scroll to the specified section
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
    },
    OpenOrderDialog() {
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
.avatar-container {
  position: relative;
}

.blurred-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(5px); /* Adjust the blur amount as needed */
}
.custom-btn {
  border: 4px solid transparent; /* Set initial border to be transparent */
  transition: border 0.3s; /* Add transition effect for smoother changes */
}

.custom-btn:hover {
  border-color: #f67e08; /* Change the border color on hover */
}
</style>
