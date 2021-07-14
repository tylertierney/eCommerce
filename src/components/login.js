const login = () => {
  let user = JSON.stringify({
    firstname: "Bob",
    lastname: "Bobbington",
    username: "user123456",
    id: "0",
    email: "bobbyb@gmail.com",
    cart: [],
    favorites: [],
  });

  return user;
};

export default login;
