import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins";
import "./assets/styles/main.scss";
import MyButton from "@/components/my-button.component";

Vue.config.productionTip = false;

Vue.component("my-button", MyButton);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
