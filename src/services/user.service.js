import { BaseServuex } from "servuex";

import store from "@/store";
import { UserAPI } from "@/api/user";

class UserService extends BaseServuex {
  constructor() {
    super("user", store);
    this.firstName = "------";
    this.lastName = "------";
    this.initialize();
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  async getUserData() {
    const { firstName, lastName } = await UserAPI.get();
    this.firstName = firstName;
    this.lastName = lastName;
  }

  updateFirstName(firtsName) {
    this.firstName = firtsName;
  }
}

export default new UserService();
