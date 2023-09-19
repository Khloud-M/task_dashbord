import { createRouter, createWebHistory } from "vue-router";
// import HelloWorld from '@/components/HelloWorld.vue'
import theLogin from "@/page/auth/theLogin.vue";
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: theLogin,

    },
  ],
  // linkActiveClass: "active",
  linkActiveClass: "active",
});

export default router;
