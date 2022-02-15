<template>
  <header class="header">
    <h1>Welcome</h1>
    <h4>{{ username }}</h4>

    <h4>{{ name }}</h4>

    <my-button
      class="logout-btn"
      text="Logout"
      color="primary"
      @clicked="logout()"
    />
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HeaderComponent",
  computed: {
    ...mapState(["name"]),
    username() {
      return this.$cookie.get("username");
    },
  },
  methods: {
    logout() {
      this.$cookie.remove("token");
      this.$cookie.remove("username");
      this.$router.push("/auth/login");
    },
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  height: 80px;
  padding: 0 20px;
  background-color: var(--primary-darker);
  display: flex;
  align-items: center;
  left: 0;
  right: 0;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  > h1,
  h4 {
    margin-right: 20px;
  }

  .logout-btn {
    margin-left: auto;
  }
}
</style>
