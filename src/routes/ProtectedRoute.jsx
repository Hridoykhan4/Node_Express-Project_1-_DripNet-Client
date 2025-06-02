import { Navigate, useLocation } from "react-router-dom";
import useAuthValue from "../hooks/useAuthValue";

const ProtectedRoute = ({ children }) => {
  const { loading, user } = useAuthValue();

  const { pathname } = useLocation();

  if (loading) {
    return <h1>Hi</h1>;
  }

  if (user) {
    return children;
  }

  return <Navigate state={pathname} to="/signin"></Navigate>;
};

export default ProtectedRoute;
