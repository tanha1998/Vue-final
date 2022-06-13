<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
    };
  },
  components: {},
  methods: {
    clicked() {
      this.$toast.add({
        severity: "error",
        summary: "Success Message",
        detail: this.value,
        life: 3000,
      });
    },
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
  margin-top: 60px;
}

.container {
  display: inline-flex;
}
</style>
