<template>
  <button class="btn" @click="clicked()" :style="{ backgroundColor: bgColor }">
    click me {{ count }}
  </button>
</template>

<script>
export default {
  name: "button-counter",
  props: {
    count: {
      type: Number,
      required: false,
      default: 0
    },
    bgColor: {
        type:String,
        require: true,
    }
  },
  data() {
    return {};
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin: 10px;
  height: 40px;
  border: none;
  background-color: rgb(130, 199, 233);
  color: white;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
