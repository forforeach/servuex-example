<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h2>Hello: {{ fullName }}</h2>
    <div>
      <input type="text" name="fisrtName" v-model="newFirstName" />
      <button @click="updateFirstName">Update first name</button>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/user.service";

export default {
  name: "Home",
  data() {
    return {
      newFirstName: ""
    };
  },
  computed: {
    fullName() {
      return UserService.fullName;
    }
  },
  methods: {
    updateFirstName() {
      UserService.updateFirstName(this.newFirstName);
      this.newFirstName = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: 10px;
  text-align: center;
}
</style>
