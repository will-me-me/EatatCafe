import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueTypedJs from "vue-typed-js";
import VueParticles from "vue-particles";

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueParticles)
  .use(VueTypedJs)
  .mount("#app");
