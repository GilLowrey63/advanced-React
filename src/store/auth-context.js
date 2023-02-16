import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //stops infinite loop
  //first argument is usually an anonymous arrow function, second argument is array of dependencies
  //runs after each component re-evaluation only if dependencies change
  useEffect(() => {
    //this function and if statement keep user logging in if state is changed or page reloaded
    //setIsLoggedIn(true) in loginHandler is a part of this
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

//creating context so that way the app can function smoothly "behind the scenes"
//right now it uses state to pass things around everywhere, this will avoid that
//component need to be wrapped in order to listen to this. For example if we need it everywhere
//we could wrap App.js, if not, we would wrap necessary components.

//onLogout and onLogin added as empty dummy function for IDE compatibility and better autocompletion assistance

//great context break down in udemy 125
//props for configuration
//context for state management across components or possibly entire app
