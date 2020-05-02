<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>
<script>
import AppHeader from "./components/Header.vue";
export default {
  components: {
    AppHeader
  }
};
</script>
<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
