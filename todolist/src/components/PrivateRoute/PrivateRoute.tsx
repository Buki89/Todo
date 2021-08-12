import React from "react";
import { useCallback } from "react";
import { Route, Redirect, RedirectProps, RouteProps } from "react-router-dom";

type PrivateRouteProps = Omit<RouteProps, "component"> & {
  component: React.ElementType;
} & RedirectProps;

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const checkIfAuthenticated = useCallback(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      return true;
    } else {
      return false;
    }
  }, []);

  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        checkIfAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={rest.to} />
        )
      }
    />
  );
};

export default PrivateRoute;
