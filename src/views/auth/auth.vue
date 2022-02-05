<template>
  <section class="auth w-100 h-100">
    <router-view />
  </section>
</template>

<script>
export default {
  name: "auth",
};
</script>

<style lang="scss">
@import "@/assets/styles/abstract/mixins";
.auth {
  @include flex($justify: center, $align: center);
  .auth-section {
    padding: 25px;
    background-color: white;
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.37);
    -moz-box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.37);
    box-shadow: 0px 0px 10px -2px rgba(0, 0, 0, 0.37);
    width: 100%;
    max-width: 500px;
    &__title {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      color: var(--primary-darker);
      margin-bottom: 30px;
    }
    &__form {
    }

   
    &__action {
      margin-top: 25px;
    }
  }
}
</style>
