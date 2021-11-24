import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getAuthState } from "../../features/Auth/AuthSlice";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const state = useSelector(getAuthState);

  const location = useLocation();

  if (!state.auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;

  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) => {
  //       return state.auth ? (
  //         children
  //       ) : (
  //         <Redirect to={{ pathname: "/login", state: { from: location } }} />
  //       );
  //     }}
  //   />

  // );
};

export default ProtectedRoute;
