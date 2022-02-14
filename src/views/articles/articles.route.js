const routes = [
  {
    path: "",
    redirect: "list",
  },
  {
    path: "list",
    name: "articlesList",
    component: () => import("./list/articlesList.vue"),
  },
  {
    path: "add-article",
    name: "add-article",
    component: () => import("./addArticle/addArticle.vue"),
  },
  {
    path: ":slug",
    name: "articleSlug",
    component: () => import("./slug/slug.vue"),
  },
];

export default routes;
