import React, { useState, useEffect, FC } from "react";
import { v4 as uuidv4 } from "uuid";

type IAuthContext = {
  isAuthenticated: boolean;
  checkIfAuthenticated: () => void;
  login: () => void;
};

export const AuthContext = React.createContext({} as IAuthContext);

const AuthContextProvider: FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkIfAuthenticated();
  }, []);

  const checkIfAuthenticated = () => {
    const token = window.localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
      console.log("setIsAuthenticated TRUE");
    } else {
      setIsAuthenticated(false);
      console.log("setIsAuthenticated FALSE");
    }
  };

  //   const checkAuth = () =>
  //     checkIsAuthenticated()
  //       .then(() => setIsAuthenticated(true))
  //       .catch(() => setIsAuthenticated(false))
  //       .then(() => setIsLoading(false));

  // const checkAuth = () => {
  //   if (window.localStorage.getItem("token")) {
  //     console.log("checkAuth");
  //     setIsAuthenticated(true);
  //   }
  // };

  const login = () => {
    console.log("login");
    window.localStorage.setItem("token", uuidv4());
  };

  //   const login = (credentials) =>
  //     authLogin(credentials)
  //       .then(setIsAuthenticated(true))
  //       .catch((error) => {
  //         alert(error);
  //         setIsAuthenticated(false);
  //       });

  //   const logout = () => {
  //     authLogout();
  //     setIsAuthenticated(false);
  //   };

  //   const signUp = (credentials) =>
  //     authSignUp(credentials)
  //       .then(setIsAuthenticated(true))
  //       .catch((error) => {
  //         alert(error);
  //         setIsAuthenticated(false);
  //       });

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, checkIfAuthenticated, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
