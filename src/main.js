import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueHeadful from 'vue-headful';
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.config.productionTip = false;

Vue.component('vue-headful', vueHeadful);
// Vue.use(EasySlider);
// library.add(faSpinner);
// Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
