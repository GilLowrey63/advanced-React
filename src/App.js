import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

const App = () => {
  const ctx = useContext(AuthContext);

  return (
    //<React.Fragment> removed when <AuthContext.Provider> was added
    //<AuthContext.Provider> PROVIDES the context, the next step is to enable other components to LISTEN
    //since I have set value, I need to add that object to my provider. I don't NEED to without a value
    //but it is a good habit to get into. This value has to be named so since I did not truly create this
    //This value can also be changed by state in this component, and that state would be passed down

    //lines 54 and 55 are unaltered, I am leaving onLogin in <Login> and onLogout in <Home> because they
    //are directly used in those components
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
};

export default App;

//udemy 114 is a GREAT summary for useEffect
