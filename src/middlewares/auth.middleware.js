import cookie from "@/plugins/jsCookie.plugin";

export default function (to, from, next) {
  const token = cookie.get("token");
  if (!token && to.matched.some(item=> item.meta.isAuthRequired)) {
    next("/auth/login");
  } else if (token && !to.matched.some(item=> item.meta.isAuthRequired)) {
    next("/articles");
  } else next();
}
