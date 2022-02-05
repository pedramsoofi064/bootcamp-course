<template>
  <section class="auth-section">
    <h1 class="auth-section__title">Login</h1>
    <form class="auth-section__form" @submit.prevent="">
      <div class="form__field">
        <label for="email">email</label>
        <input name="email" type="text" />
      </div>
      <div class="form__field">
        <label for="password">password</label>
        <input name="password" type="password" />
      </div>
      <div class="auth-section__action">
        <my-button class="w-100" text="Login" color="primary"></my-button>
      </div>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
