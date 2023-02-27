import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import { MotionPlugin } from "@vueuse/motion";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  MotionPlugin,
  render: (h) => h(App),
}).$mount("#app");
