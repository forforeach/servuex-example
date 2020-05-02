<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>Hello: {{ fullName }}</h2>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss" scoped>
.home {
  margin: 10px;
  text-align: center;
}
</style>
