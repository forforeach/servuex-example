<template>
  <div class="app-header">
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="user-box">
      <img class="avatar" alt="Vue logo" src="../assets/logo.png" />
      <div class="name">John Doe</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  align-items: center;
  height: 80px;
  box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.5);
}
.nav {
  margin: auto 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: auto 5px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.avatar {
  height: 50px;
  margin: auto 15px;
}
.user-box {
  display: flex;
  align-items: center;
  margin: auto 30px auto auto;
}
</style>
