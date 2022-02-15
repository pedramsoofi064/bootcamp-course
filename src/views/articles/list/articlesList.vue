<template>
  <section>
    <h1>{{ name }}</h1>
    <h1>{{ getName }}</h1>
    <button @click="changeNameClick()">click me</button>
  </section>
</template>

<script>
import articleServices from "@/services/article.service";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "ArticlesList",
  data() {
    return {
      articles: null,
    };
  },
  mounted() {
    this.getArticle();
  },
  computed: {
    ...mapState({
      name: (state) => state.name,
    }),
    ...mapGetters(["getName"]),
  },
  methods: {
    ...mapActions(["changeName"]),
    async getArticle() {
      try {
        const resposne = await articleServices.getArticles();
        const { articles } = resposne.data;
        this.articles = articles;
      } catch {
        this.$notif.error("error while getting articles");
      }
    },
    changeNameClick() {
      const name = "ferdowsi";
      this.changeName(name);
    },
  },
};
</script>

<style>
</style>