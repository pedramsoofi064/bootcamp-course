import Vue from "vue";
import Vuex from "vuex";
import articleModule from "./modules/article.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "bootcamp",
  },
  getters: {
    getName(state) {
      return state.name.toLocaleUpperCase();
    },
  },
  actions: {
    changeName({ commit }, newName) {
      commit("changeName", newName);
    },
  },
  mutations: {
    changeName(state, newName) {
      state.name = newName;
    },
  },
  modules: {
    articleModule,
  },
});
