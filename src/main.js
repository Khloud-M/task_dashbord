import router from "./router";
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

const app = createApp(App);

registerPlugins(app);
app.use(router);
// app.use(VueAxios, axios)
app.mount("#app");
