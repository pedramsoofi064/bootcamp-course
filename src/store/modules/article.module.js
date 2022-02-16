import articleServices from "@/services/article.service";

const articleModule = {
  namespaced: true,
  state: {
    name: "articles",
    articles: [],
    articlesCount: 0,
  },
  actions: {
    async getArticles({ commit }) {
      const res = await articleServices.getArticles();
      commit("getArticles", res.data);
    },
  },
  mutations: {
    getArticles(state, payload) {
      state.articles = payload.articles;
      state.articlesCount = payload.articlesCount;
    },
  },
};

export default articleModule;
