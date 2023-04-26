import { useAuth } from "../context/AuthContext.jsx";
import { Navigate, Outlet } from "react-router-dom";

const PrivateOutlet = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/users/login" />;
};

export default PrivateOutlet;
