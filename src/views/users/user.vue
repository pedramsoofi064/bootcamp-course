<template>
  <div>
    <h2>hi , user id is :{{ userId }}</h2>
    <h3>username is : {{ username }}</h3>
    <button @click="go()">go</button>
    <button @click="back()">back</button>

     <button @click="show = !show">click me</button>
    <transition name="test">
       <p v-if="show">bootcamp</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: "user",
  data(){
    return {
      show: true
    }
  },
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
