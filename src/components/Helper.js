export const authenticate = () => {
  const currentUser = localStorage.getItem("currentUser");
  console.log("current user is: " + currentUser);

  if (currentUser) {
    return currentUser;
  } else {
    return false;
  }
};