<template>
  <section class="add-article">
    <h1>{{ pageTitle }}</h1>
    <form class="add-article__form" @submit.prevent="">
      <div class="form__field">
        <label for="title">title</label>
        <input
          name="title"
          type="text"
          placeholder="article title ..."
          v-model="article.title"
        />
      </div>
      <div class="form__field">
        <label for="description">description</label>
        <textarea
          name="description"
          placeholder="article description ..."
          v-model="article.description"
        ></textarea>
      </div>
      <div class="form__field">
        <label for="body">body</label>
        <textarea
          name="body"
          v-model="article.body"
          placeholder="article body ..."
        ></textarea>
      </div>
      <div class="add-article__taglist">
        <div class="form__field">
          <label for="title">tag title</label>
          <input
            name="title"
            type="text"
            placeholder="tag title ..."
            v-model="tag"
          />
        </div>
        <my-button color="primary" text="add tag" @clicked="addTag()" />
        <div class="add-article__tags">
          <span v-for="(tag, index) in article.tagList" :key="index">
            {{ tag }}
          </span>
        </div>
      </div>
      <my-button
        color="primary"
        class="submit-btn"
        :text="submitText"
        :loading="loading"
        @clicked="submit()"
      />
    </form>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "AddArticle",
  data() {
    return {
      tag: "",
      loading: false,
      mode: "",
      article: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
    };
  },
  computed: {
    ...mapState({
      selectedArticle: (state) => state.articleModule.selectedArticle,
    }),
    pageTitle() {
      return this.mode == "add" ? "Add Article" : "Edit Article";
    },
    submitText() {
      return this.mode == "add" ? "create article" : "edit article";
    },
  },
  async mounted() {
    if (this.$route.name == "edit-article") this.mode = "edit";
    else this.mode = "add";

    if (this.mode == "edit") {
      if (!this.selectedArticle) this.getArticle();
      else this.handleEditMode();
    }
  },
  methods: {
    handleEditMode() {
      this.article = {
        ...this.selectedArticle,
      };
    },
    addTag() {
      if (this.tag) {
        this.article.tagList.push(this.tag);
        this.tag = "";
      }
    },
    async getArticle() {
      const { slug } = this.$route.params;
      this.loading = true;
      try {
        await this.$store.dispatch("articleModule/getArticle", slug);
        this.handleEditMode();
      } catch {
        console.log("error in get article");
      } finally {
        this.loading = false;
      }
    },
    async submit() {
      this.loading = true;
      try {
        await this.$store.dispatch("articleModule/createArticle", {
          article: this.article,
        });
        this.$notif.success("article created successfully");
        this.$router.push("/articles/list");
      } catch {
        this.$notif.error("error in submit article");
      }
    },
  },
};
</script>

<style lang="scss">
.add-article {
  > h1 {
    font-size: 25px;
    margin-bottom: 15px;
    color: var(--primary-darker);
  }

  &__form {
    .add-article__taglist {
      display: flex;
      align-items: center;
      .form__field {
        width: 40%;
        margin-right: 10px;
      }

      .btn {
        margin-top: 8px;
      }
      .add-article__tags {
        display: flex;
        flex-wrap: wrap;
        padding-top: 10px;
        margin-left: 15px;
        > span {
          padding: 5px 10px;
          font-size: 10px;
          color: var();
          margin-right: 5px;
          border-radius: 15px;
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }

    .submit-btn {
      width: 150px;
    }
  }
}
</style>