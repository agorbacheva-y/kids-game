import { authenticate } from "./Helper";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = authenticate();
  return auth ? children : <Navigate to="/loginfeature" />;
};

export default PrivateRoute;