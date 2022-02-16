<template>
  <section class="articles-list">
    <h1>Articles list</h1>
    <div class="articles-list__loading" v-if="loading">
      Please wait
      <br />
      Get articles from server ...
    </div>
    <div v-else>
      <div class="articles-list__loading" v-if="articles.length < 1">
        No article Found!
      </div>
      <div class="articles-list__items">
        <articleComponent
          v-for="(article, index) in articles"
          :data="article"
          :key="`article-${index}`"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import articleComponent from "@/components/article.component.vue";

export default {
  name: "ArticlesList",
  components: {
    articleComponent,
  },
  data() {
    return {
      loading: false,
    };
  },
  mounted() {
    if (this.articles.length < 1) this.getArticle();
  },
  computed: {
    ...mapState({
      name: (state) => state.name,
      articles: (state) => state.articleModule.articles,
    }),
    ...mapGetters(["getName"]),
  },
  methods: {
    ...mapActions(["changeName"]),
    async getArticle() {
      this.loading = true;
      try {
        await this.$store.dispatch("articleModule/getArticles");
      } catch {
        this.$notif.error("error while getting articles");
      } finally {
        this.loading = false;
      }
    },
    changeNameClick() {
      const name = "ferdowsi";
      this.changeName(name);
    },
  },
};
</script>

<style lang="scss" scoped>
.articles-list {
  > h1 {
    font-size: 25px;
    margin-bottom: 15px;
    color: var(--primary-darker);
  }

  &__loading {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  &__items {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 15px;
  }
}
</style>