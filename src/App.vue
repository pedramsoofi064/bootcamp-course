<template>
  <div id="app">
    <nav class="nav">
      <router-link
        to="/home"
        class="nav-links"
        exact-active-class="active"
        exact
        >Home</router-link
      >
      <router-link
        to="/welcome"
        class="nav-links"
        exact-active-class="active"
        exact
        >Welcome</router-link
      >
      <router-link
        to="/users"
        class="nav-links"
        exact-active-class="active"
        exact
        >Users</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
html,
#app,
body {
  width: 100%;
  height: 100%;
  background-color: #d4f1f4;
  color: #05445e;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.nav {
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d4f1f4;
  padding: 0 10px;
  background-color: #05445e;
  .nav-links {
    font-size: 18px;
    font-weight: 700;
    margin-right: 10px;
    text-decoration: none;
    color: #75e6da;
    transition: all 0.5s;
    &:hover {
      border-bottom: 1px solid #189ab4;
      color: #189ab4;
    }

    &.active {
      border-bottom: 1px solid #189ab4;
      color: #189ab4;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
