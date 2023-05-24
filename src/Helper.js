export const authenticate = () => {
 if (localStorage.getItem("user")) {
   return JSON.parse(localStorage.getItem("user"));
 } else {
   return false;
 }
};

// the logged in player is already stored in localStorage as "currentUser" elsewhere
// pls update getItem() to "currentUser" to keep it consistent. thanks!
