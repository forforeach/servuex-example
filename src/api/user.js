export const UserAPI = {
  get() {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve({
            firstName: "John",
            lastName: "Doe"
          }),
        1000
      );
    });
  }
};
