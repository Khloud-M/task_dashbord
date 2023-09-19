import { createRouter, createWebHistory } from "vue-router";
// import HelloWorld from '@/components/HelloWorld.vue'
import theLogin from "@/page/auth/theLogin.vue";
import authWrapper from "@/page/auth/authWraaper.vue";
import forgetpass from "@/page/auth/forgetPass.vue";
import varifactionCode from "@/page/auth/varifactionCode.vue";
import editPassword from "@/page/auth/editPassword.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: authWrapper,
      props: true,
      children: [
        { path: "", component: theLogin },
        { path: "forgetpass", component: forgetpass },
        { path: "varifactionCode", component: varifactionCode },
        { path: "editPassword", component: editPassword ,props:true},
      ],
    },
  ],
  // linkActiveClass: "active",
  linkActiveClass: "active",
});

export default router;
