import Vue from "vue";
import VueRouter from "vue-router";
import authRoutes from "@/views/auth/auth.routes";
import authMiddleware from "@/middlewares/auth.middleware";
import articleRoutes from "@/views/articles/articles.route";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "auth",
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("@/views/auth/auth.vue"),
    children: authRoutes,
    meta: {
      isAuthRequired: false,
    },
  },
  {
    path: "/articles",
    name: "articles",
    component: () => import("@/views/articles/articles.vue"),
    children: articleRoutes,
    meta: {
      isAuthRequired: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(authMiddleware);

export default router;
