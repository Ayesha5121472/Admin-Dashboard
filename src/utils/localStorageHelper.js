// USERS
export const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
export const saveUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

// PRODUCTS
export const getProducts = () =>
  JSON.parse(localStorage.getItem("products")) || [];
export const saveProducts = (products) =>
  localStorage.setItem("products", JSON.stringify(products));