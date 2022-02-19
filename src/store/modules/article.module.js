import articleServices from "@/services/article.service";

const articleModule = {
  namespaced: true,
  state: {
    name: "articles",
    articles: [],
    articlesCount: 0,
    selectedArticle: null,
  },
  actions: {
    async getArticles({ commit }) {
      const res = await articleServices.getArticles();
      commit("getArticles", res.data);
    },
    async getArticle({ commit }, slug) {
      const res = await articleServices.getArticle(slug);
      const { article } = res.data;
      commit("saveArticle", article);
    },
    async deleteArticle({ commit }, slug) {
      await articleServices.deleteArticle(slug);
      commit("deleteArticle", slug);
    },
    async createArticle({ commit }, data) {
      const res = await articleServices.createArticle(data);
      const { article } = res.data;
      commit("createArticle", article);
    },
    saveArticle({ commit }, payload) {
      commit("saveArticle", payload);
    },
    resetState({ commit }) {
      commit("resetState");
    },
  },
  mutations: {
    getArticles(state, payload) {
      state.articles = payload.articles;
      state.articlesCount = payload.articlesCount;
    },
    createArticle(state, payload) {
      state.articles.unshift(payload);
    },
    saveArticle(state, payload) {
      state.selectedArticle = payload;
    },
    deleteArticle(state, slug) {
      state.articles = state.articles.filter((item) => item.slug != slug);
    },
    resetState(state) {
      state.articles = []
      state.articlesCount = 0
      state.selectedArticle = null;
    },
  },
};

export default articleModule;
