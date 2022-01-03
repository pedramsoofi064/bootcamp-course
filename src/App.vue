<template>
  <div id="app">
    <h1 class="color-red" v-text="name"></h1>
    <img v-bind:src="imageSrc" :alt="name" ref="myimg" />
    <br />
    <a :href="link" v-text="link" :style="style" ref="mylink"></a>
    <span v-html="htmlStr"></span>
    <!-- <hr />
    <div v-if="number > 5">num > 5</div>
    <div v-else-if="number == 5">num == 5</div>
    <div v-else>num less than five</div>
    <hr /> -->
    <!-- <ul>
      <li v-for="(item, index) in 5" :key="`item-${index}`">
        {{ item }} {{ index }}
      </li>
    </ul>
    <hr />
   
    <hr>
    <input type="text" v-model="num2">
    <div>{{num2 }}</div> -->

    <!-- <form @submit.prevent ="func()">
      test
      <button type="submit">click me</button>
    </form> -->
    <!-- <hr />
    {{ courseName }}
    <hr />
    <button @click="func()">click me</button>
    <br />
    <h2>{{ num }}</h2>
    <br> -->
  </div>
</template>

<script >
export default {
  name: "App",
  data() {
    return {
      name: "Bootcamp",
      imageSrc: require("@/assets/logo.png"),
      link: "http://google.com",
      htmlStr: "<b>Hello</b>",
      number: 5,
      arr: [1, 2, 3],
      num: 5,
      num2: 5,
      style: { display: "block", textDecoration: "none", fontSize: "25px" },
    };
  },
  computed: {
    courseName() {
      // code
      const name = "bootcamp front-end";

      return name + " sdasdsad";
    },
  },
  watch: {
    num(newVal, oldVal) {
      console.log(newVal, oldVal);
      if (newVal > 10) {
        console.log("hello its done");
      }
    },
  },
  // beforeCreate() {
  //   console.log('beforeCreate');
  // },
  created() {
    // console.log("created");
    // const elm = document.getElementById("mylink");
    // console.log(elm);
  },
  // beforeMount(){
  //   console.log('beforeMount');
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {
  //   console.log('updated')
  // },
  mounted() {
    console.log("mounted");
    // const elm = document.getElementById("mylink");
    const elm = this.$refs.mylink
    console.log(elm);
    // console.log(elm);
  },

  methods: {
    func() {
      this.num += 1;
    },
    func2() {},
  },
};
</script>

<style lang="scss">
.color-red {
  color: blue;
}
</style>
