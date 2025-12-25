export const getUsers = () => {
  try {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error("Invalid users data in localStorage. Resetting." + error);
    localStorage.removeItem("users");
    return [];
  }
};

export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

export const getLoggedInUser = () => {
  try {
    const user = localStorage.getItem("loggedInUser");
    return user ? JSON.parse(user) : null;
  } catch {
    localStorage.removeItem("loggedInUser");
    return null;
  }
};

export const setLoggedInUser = (user) => {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
};

export const logoutUser = () => {
  localStorage.removeItem("loggedInUser");
};