<template>
  <section class="article-slug">
    <div v-if="selectedArticle">
      <div class="slug__author" v-if="selectedArticle.author">
        <img :src="selectedArticle.author.image" alt="" />
        <h1>{{ selectedArticle.author.username }}</h1>
      </div>
      <div class="slug__title">
        <h2>{{ selectedArticle.title }}</h2>
      </div>
      <div class="slug__desc">
        <h4>{{ selectedArticle.description }}</h4>
      </div>
      <div class="slug__body">
        <p>{{ selectedArticle.body }}</p>
      </div>
    </div>
    <div v-else-if="loading">
       <h1>Loading ...</h1>
    </div>
    <div v-else>
      <h1>Nothing Found!!</h1>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ArticleSlug",
  data() {
     return {
        loading: false,
     }
  },
  computed: {
    ...mapState({
      selectedArticle: (state) => state.articleModule.selectedArticle,
    }),
  },
  mounted() {
     if(!this.selectedArticle){
        this.getArticle()
     }
  },
  methods: {
     async getArticle() {
        const {slug} = this.$route.params;
        this.loading = true
        try {
           await this.$store.dispatch('articleModule/getArticle' , slug)
        }catch {
           console.log('error in get article');
        }
        finally {
           this.loading = false
        }
     }
  }
};
</script>

<style lang="scss" scoped>

</style>