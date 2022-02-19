<template>
  <div class="article">
    <div class="article__author">
      <img :src="data.author.image" alt="" />
      <span>{{ data.author.username }}</span>
      <div class="article__date">
        {{ date }}
      </div>
    </div>
    <div class="article__title">
      {{ data.title }}
    </div>
    <div class="article__description">
      {{ data.description }}
    </div>
    <div class="article__body">
      {{ data.body }}
    </div>
    <div class="article__tags">
      <span v-for="(tag, index) in data.tagList" :key="index">
        {{ tag }}
      </span>
    </div>
    <div class="article__action">
      <my-button text="visit" color="primary" @clicked="visitArticle()" />
      <my-button
        v-if="data.author.username == username"
        text="edit"
        color="warning"
        @clicked="editArtcile()"
      />
      <my-button
        v-if="data.author.username == username"
        text="delete"
        color="danger"
        @clicked="deleteArticle()"
      />
    </div>
  </div>
</template>

<script>
import cookie from "@/plugins/jsCookie.plugin";
export default {
  name: "articleComponent",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    date() {
      const d = new Date(this.data.createdAt);
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        day: "numeric",
        month: "numeric",
        year: "numeric",
      };
      return new Intl.DateTimeFormat("en-US", options).format(d);
    },
    username() {
      return cookie.get("username");
    },
  },
  methods: {
    visitArticle() {
      this.$store.dispatch("articleModule/saveArticle", this.data);
      this.$router.push(`/articles/${this.data.slug}`);
    },
    editArtcile() {
      this.$store.dispatch("articleModule/saveArticle", this.data);
      this.$router.push(`/articles/edit/${this.data.slug}`);
    },
    async deleteArticle() {
      try {
        await this.$store.dispatch(
          "articleModule/deleteArticle",
          this.data.slug
        );
      } catch {
        this.$notif.error("error in delete artice");
      }
    },
  },
};
</script>

<style lang="scss">
.article {
  padding: 15px;
  background-color: white;
  border-radius: 25px;
  -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.37);
  box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.37);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  &__date {
    margin-left: auto;
    font-size: 12px;
    color: var(--grey-5);
  }

  &__author {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 15px;
    }

    > span {
      font-weight: 700;
      color: var(--primary-darker);
    }
  }

  &__title {
    border-top: 1px solid var(--grey-5);
    padding: 5px 0;
    font-size: 18px;
    color: var(--primary-darker);
    font-weight: bold;
  }

  &__description {
    font-size: 14px;
    margin-top: 10px;
    color: var(--grey-6);
    font-style: italic;
  }
  &__body {
    font-size: 14px;
    margin-top: 10px;
    color: var(--grey-6);
    flex: 1;
  }

  &__tags {
    margin-top: 5px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    padding-top: 10px;
    > span {
      padding: 5px 10px;
      font-size: 10px;
      color: var();
      margin-right: 5px;
      border-radius: 15px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  &__action {
    border-top: 1px solid var(--grey-5);
    padding: 5px 0;
    display: flex;
    button {
      height: 20px !important;
      margin-right: 10px;
    }
  }
}
</style>