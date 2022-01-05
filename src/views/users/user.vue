<template>
  <div>
    <h2>hi , user id is :{{ userId }}</h2>
    <h3>username is : {{ username }}</h3>
    <button @click="go()">go</button>
    <button @click="back()">back</button>
  </div>
</template>

<script>
export default {
  name: "user",
  mounted() {
    // console.log(this.$router);
    console.log(this.$route);
  },
  computed: {
    userId() {
      return this.$route.params.id;
    },
    username() {
      return this.$route.query.name;
    },
  },
  methods: {
    go() {
        this.$router.go(2)
    },
    back() {
        this.$router.back()
    }
  },
};
</script>

<style></style>
