import cookie from "@/plugins/jsCookie.plugin";

export default function (to, from, next) {
  const token = cookie.get("token");
  if (!token && to.meta.isAuthRequired) {
    next("/auth/login");
  } else if (token && !to.meta.isAuthRequired) {
    next("/articles");
  } else next();
}
