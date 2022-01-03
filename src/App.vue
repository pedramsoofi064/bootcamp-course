<template>
  <div id="app">
    <header-component />
    <h1 class="color-red" v-text="name"></h1>
    <MyButton class="test" bgColor="red" @clicked="num1++"></MyButton>
    <MyButton :count="num2" bgColor="blue" @clicked="num2++" />

    <div class="input-filed">
      <label class="input-filed__label">name</label>
      <input class="input-filed__inp" type="text" name="" id="" />
    </div>

    <div class="badge" :class="[number > 2 ? 'success' : 'error']">Bootcamp</div>
  </div>
</template>

<script>
import MyButton from "@/components/button-counter.vue";
import HeaderComponent from "./components/header.vue";
export default {
  name: "App",
  components: {
    MyButton,
    HeaderComponent,
  },
  data() {
    return {
      name: "Bootcamp",
      imageSrc: require("@/assets/logo.png"),
      link: "http://google.com",
      htmlStr: "<b>Hello</b>",
      number: 5,
      arr: [1, 2, 3],
      num1: 5,
      num2: 10,
      style: { display: "block", textDecoration: "none", fontSize: "25px" },
      chk: [],
      bool: false,
    };
  },
};
</script>

<style lang="scss">
.color-red {
  color: goldenrod;
}

.input-filed {
  display: flex;
  flex-direction: column;
  max-width: 200px;
  padding: 10px;
  border: 1px solid;
  &__label {
    font-size: 20px;
    font-weight: 700;
  }

  &__inp {
    height: 40px;
    border-radius: 5px;
  }
}

html,
#app,
body {
  width: 100%;
  height: 100%;
}

#app {
  margin-top: 80px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.badge {
  font-size: 20px;
  margin-top: 20px;
  width: 150px;
  height: 40px;
  padding: 10px;
    border-radius: 7px;
  border: 1px solid;

}

.error {
  color: red;
  border-color: red;
}

.success {
  color: greenyellow;
  border-color: greenyellow;

}

.active {
  font-weight: 700;
}
</style>
