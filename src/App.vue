<template>
  <router-view></router-view>
  <Toast />
</template>

<script>
import store from "@/store";
import { provide } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    provide("store", store);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  display: inline-flex;
}
</style>
