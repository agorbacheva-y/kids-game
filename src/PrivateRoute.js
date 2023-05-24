import { authenticate } from "../data";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = authenticate();
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

// when importing {authenticate} at the top, we do not have a data folder so please update the name to where it is imported from

// your login component is called LoginFeature.js so pls change the link in <Navigate> to "to="/loginfeature"
