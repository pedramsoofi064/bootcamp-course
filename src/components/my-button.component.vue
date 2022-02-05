<template>
  <button class="btn" :class="[color]" @click="clicked($event)">
    <span v-if="!loading">{{ text }}</span>
    <span v-else>Loading ...</span>
  </button>
</template>

<script>
export default {
  name: "My-Button",
  props: {
    text: {
      type: String,
      default: "submit",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
    },
  },
  methods: {
    clicked(e) {
      if (!this.loading) {
        this.$emit("clicked");
      }
      else {
        e.preventDefault()
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  background: none;
  border-radius: 8px;
  height: 40px;
  padding: 0 15px;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.3s;
  &.primary {
    background-color: var(--primary-main);
    color: white;
    border-color: var(--primary-main);

    &:hover {
      background-color: white;
      color: var(--primary-main);
    }
  }
  &.danger {
    background-color: var(--cover-red-dark);
    color: white;
    border-color: var(--cover-red-dark);

    &:hover {
      background-color: white;
      color: var(--cover-red-dark);
    }
  }
}
</style>
