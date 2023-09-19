import router from "./router";
import store from "./store";
// Composables
import { createApp } from "vue";
import App from "./App.vue";

// Plugins
import { registerPlugins } from "@/plugins";
// import assets
import "@/assets/style/main.css"
// import * as Vue from 'vue' // in Vue 3
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import axios from "axios";
import VueAxios from "vue-axios";
axios.defaults.headers = {
  baseURL: "https://speed4ever.elsaed.aait-d.com",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "ar",
  }
};

const app = createApp(App);

registerPlugins(app);
app.use(router);
app.use(store);
app.use(VueAxios, axios);
// app.use(VueAxios, axios)
app.mount("#app");
