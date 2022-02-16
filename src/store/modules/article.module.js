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
    async createArticle({commit} , data){
      commit
      const res = await articleServices.createArticle(data)
      console.log(res);
    }
  },
  mutations: {
    getArticles(state, payload) {
      state.articles = payload.articles;
      state.articlesCount = payload.articlesCount;
    },
  },
};

export default articleModule;
