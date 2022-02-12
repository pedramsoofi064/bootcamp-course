<template>
  <section class="auth-section">
    <h1 class="auth-section__title">Register</h1>
    <form class="auth-section__form" @submit.prevent="register">
      <div class="form__field">
        <label for="email">email</label>
        <input name="email" v-model="user.email" type="text" />
      </div>
      <div class="form__field">
        <label for="password">password</label>
        <input name="password" v-model="user.password" type="password" />
      </div>
      <div class="form__field">
        <label for="username">username</label>
        <input name="username" v-model="user.username" type="text" />
      </div>
      <div class="auth-section__action">
        <my-button
          class="w-100"
          text="Register"
          color="primary"
          type="submit"
          :loading="loading"
        ></my-button>
      </div>
    </form>
    <router-link to="/auth/login" class="auth__navigate-link w-100"
      >Already has account? <span>Login</span></router-link
    >
  </section>
</template>

<script>
import userServices from "@/services/user.service";
export default {
  name: "Regsiter",
  data() {
    return {
      loading: false,
      user: {
        email: "",
        password: "",
        username: "",
      },
    };
  },
  methods: {
    async register() {
      this.loading = true;
      try {
        const res = await userServices.register(this.user);
        const { user } = res.data;
        // same => const user = res.data.user
        const { token, username } = user;
        this.$cookie.set("token", token);
        this.$cookie.set("username", username);
        this.$notif.success("user registred successfully!");
        this.$router.push("/articles");
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
