import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Kennel.css";

const Kennel = () => {

      // Check if credentials are in session storage returns true/false
  const isAuthenticated = () => sessionStorage.getItem("credentials") != null || localStorage.getItem("credentials") !== null;

  const [hasUser, setHasUser] = useState((isAuthenticated()))

  const setUser = user => {

    console.log('setUser user', user)
    if (user.remember === 'on') {
      localStorage.setItem(
        "credentials",
        JSON.stringify(user)
      )
    } else {
      sessionStorage.setItem(
        "credentials",
        JSON.stringify(user)
      );
    }
    
    setHasUser(isAuthenticated())
  }


  return (
    <>
      <NavBar hasUser={hasUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
  );
};

export default Kennel;