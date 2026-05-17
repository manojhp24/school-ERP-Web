export const getToken = () => {
  return localStorage.getItem("accessToken");
};

export const getUser = () => {
  return localStorage.getItem("user");
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};
