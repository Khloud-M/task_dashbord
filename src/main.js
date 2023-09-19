import router from "./router";
import store from "./store";
// Composables
import { createApp } from "vue";
import App from "./App.vue";

// Plugins
import { registerPlugins } from "@/plugins";
import VOtpInput from "vue3-otp-input";

// import assets
import "@/assets/style/main.css"
// import * as Vue from 'vue' // in Vue 3
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// import ButtonSpinner from "vue-button-spinner";
// app.component("button-spinner", ButtonSpinner);
import BaseButton from "./components/ui/BaseButton.vue";
// app.component("base-button", BaseButton);
import axios from "axios";
import VueAxios from "vue-axios";
import Toaster from "@meforma/vue-toaster";

// axios.defaults.headers = {
//   baseURL: "https://apis.quickly-egypt.com/admin/users/auth/",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/json",
//     "Accept-Language": "ar",
//   }
// };
// import ButtonSpinner from "vue-button-spinner";

const app = createApp(App);

registerPlugins(app);
app.component("base-button", BaseButton);
app.component("v-otp-input", VOtpInput);

// app.component("button-spinner", ButtonSpinner);


app.use(router);
app.use(store);
app.use(Toaster);
app.use(VueAxios, axios);
// app.use(VueAxios, axios)
app.mount("#app");
