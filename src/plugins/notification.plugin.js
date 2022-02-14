import Vue from "vue";
import Notifications from "vue-notification";
Vue.use(Notifications);

const notif = {
  success(msg) {
    Vue.notify({
      group: "foo",
      title: "Success",
      type: "success",
      duration: 5000,
      text: msg,
    });
  },
  error(msg) {
    Vue.notify({
      group: "foo",
      title: "Error!",
      type: "error",
      duration: 5000,
      text: msg,
    });
  },
};

Vue.prototype.$notif = notif;

export default notif;
