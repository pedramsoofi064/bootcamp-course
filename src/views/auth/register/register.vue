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
        res;
        this.$router.push("/articles");
      } catch {
        console.log("error in register");
        // this.$toast.open({
        //   message: "Something went wrong!",
        //   type: "error",
        //   // all of other options may go here
        // });
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style></style>
