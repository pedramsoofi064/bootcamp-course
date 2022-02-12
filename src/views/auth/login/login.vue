<template>
  <section class="auth-section">
    <h1 class="auth-section__title">Login</h1>
    <form class="auth-section__form" @submit.prevent="submit()">
      <div class="form__field">
        <label for="email">email</label>
        <input name="email" type="text" v-model="user.email" />
      </div>
      <div class="form__field">
        <label for="password">password</label>
        <input name="password" type="password" v-model="user.password" />
      </div>
      <div class="auth-section__action">
        <my-button
          class="w-100"
          text="Login"
          color="primary"
          :loading="loading"
        ></my-button>
      </div>
    </form>
    <router-link to="/auth/register" class="auth__navigate-link w-100"
      >has no account? <span>Register</span></router-link
    >
  </section>
</template>

<script>

import userServices from "@/services/user.service";

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async submit() {
      this.loading = true;
      try {
        const res = await userServices.login(this.user);
        const { user } = res.data;
        // same => const user = res.data.user
        const { token, username } = user;
        this.$cookie.set("token", token);
        this.$cookie.set("username", username);
        this.$notif.success("user logged in successfully!");
        this.$router.push("/articles");
      } catch (error) {
        const { errors } = error.response?.data;
        Object.keys(errors).forEach((key) => {
          console.log();
          this.$notif.error(`${key}: ${errors[key][0]} !!`);
        });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
