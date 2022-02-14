<template>
  <aside class="sidebar">
    <router-link
      v-for="(link, index) in navigationLinks"
      :key="`link-${index}`"
      :to="link.to"
      class="navigation-link"
      exact-active-class="active-link"
      >{{ link.title }}</router-link
    >
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent",
  data() {
    return {
      navigationLinks: [
        {
          title: "Articles list",
          to: "/articles/list",
        },
        {
          title: "Add article",
          to: "/articles/add-article",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 250px;
  background-color: var(--primary-main);
  position: fixed;
  top: 80px;
  bottom: 0;
  left: 0;
  padding: 25px 15px;
  display: flex;
  flex-direction: column;
  .navigation-link {
    text-decoration: none;
    color: white;
    font-size: 20px;
    padding: 10px;
    border-radius: 8px;
    transition: all 0.5s;
    margin-bottom: 10px;
    font-weight: 500;
    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.1);
    }

    &.active-link {
      background-color: rgba($color: #E3EFFB, $alpha: 0.3);
    //   color: var(--primary-main);
    }
  }
}
</style>