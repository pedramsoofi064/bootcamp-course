<template>
  <header class="header">
    Header 🚍
    <navLink anchor="http://google.com">
      <template v-slot:prefix>
        <span>hi:</span>
      </template>
      search engine
    </navLink>
    <navLink anchor="http://facebook.com" />
  </header>
</template>

<script>
import navLink from "./navlink.vue";
export default {
  name: "HeaderComponent",
  components: {
    navLink,
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  height: 80px;
  padding: 0 20px;
  background-color: #767575;
  display: flex;
  align-items: center;
  left: 0;
  right: 0;
  color: white;
  font-size: 20px;
}
</style>
