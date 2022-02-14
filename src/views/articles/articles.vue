<template>
  <section class="articles">
    <HeaderComponent />
    <SidebarComponent />
    <div class="articles__view">
      <router-view />
    </div>
  </section>
</template>

<script>
import HeaderComponent from "@/components/header.component.vue";
import SidebarComponent from "@/components/sidebar.component.vue";
export default {
  name: "articles",
  components: { HeaderComponent, SidebarComponent },
};
</script>

<style lang="scss" scoped>
.articles {
  padding-top: 80px;
  min-height: 100%;
  margin-left: 250px;
  .articles__view {
    height: 100%;
    padding: 25px;
  }
}
</style>