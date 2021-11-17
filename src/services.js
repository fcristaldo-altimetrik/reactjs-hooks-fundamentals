export const getUser = (userId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      switch (userId) {
        case "1":
          resolve({
            name: "facundo",
            email: "facundo@mail.com",
          });
          break;
        case "2":
          resolve({
            name: "jose",
            email: "jose@mail.com",
          });
          break;
        default:
          reject("Invalid user id");
          break;
      }
    }, 2000);
  });
