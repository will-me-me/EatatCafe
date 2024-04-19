import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueTypedJs from "vue-typed-js";
import { loadFonts } from "./plugins/webfontloader";
// import Particles from "vue3-particles";
import Vue3Lottie from "vue3-lottie";
// import Particles from "@tsparticles/vue3";
// import { loadSlim } from "@tsparticles/slim";
// import { loadFull } from "tsparticles";
import { MotionPlugin } from "@vueuse/motion";
import VueTelInput from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";
import Particles from "vue3-particles";
import { createPinia } from "pinia";

const globalOptions = {
  mode: "auto",
};

loadFonts();

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .use(router)
  .use(VueTelInput, globalOptions)
  .use(vuetify)
  .use(MotionPlugin)
  // .use(Particles, {
  //   init: async (engine) => {
  //     await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
  //     await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
  //   },
  // })
  .use(Particles)
  .use(VueTypedJs)
  .use(Vue3Lottie)
  .mount("#app");
