<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Here, as well, you can access the user name: {{ fullName }}</h2>
  </div>
</template>

<script>
import UserService from "@/services/user.service";

export default {
  computed: {
    fullName() {
      return `${UserService.firstName} ${UserService.lastName}`;
    }
  }
};
</script>
