export const authenticate = () => {
 if (localStorage.getItem("user")) {
   return JSON.parse(localStorage.getItem("currentUser"));
 } else {
   return false;
 }
};