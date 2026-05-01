export const setData = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
export const getData = () => {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : [];
};
