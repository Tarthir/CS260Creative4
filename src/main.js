import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import mockc from './mock-cookies.js'
import mockb from './mock-brownies.js'
Vue.config.productionTip = false;

let data = {
  products: [mockc, mockb],
  cart: [],
};

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
