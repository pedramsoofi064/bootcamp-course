<template>
  <a class="link" :href="anchor">
    <slot name="prefix"></slot>
    <slot>{{ anchor }}</slot>
  </a>
</template>

<script>
export default {
  name: "navLink",
  props: {
    anchor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.link {
  cursor: pointer;
  color: white;
  margin: 0 10px;
  transition: all 0.5s;
  &:hover {
    color: rgb(89, 251, 19);
  }
}
</style>
