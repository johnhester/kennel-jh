import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1 className="site-title">
        Student Kennels
        <br />
        <small>Loving care when you're not there.</small>
      </h1>
      <nav>
        <ul className="container">
            <li>
                <NavLink 
                  activeClassName="nav-link" 
                  exact to="/"
                  activeStyle={{
                    color: "cornsilk"
                  }}
                >
                  Home
                </NavLink>
            </li>
            <li>
              <NavLink 
                activeClassName="nav-link" 
                to="/animals"
                activeStyle={{
                  color: "cornsilk"
                }}
              >
                Animals
              </NavLink>
            </li>
            <li>
              <NavLink 
                  activeClassName="nav-link" 
                  to="/locations"
                  activeStyle={{
                    color: "cornsilk"
                  }}
                >
                  Locations
              </NavLink>
            </li>
            <li>
              <NavLink 
                activeClassName="nav-link" 
                to="/employees"
                activeStyle={{
                  color: "cornsilk"
                }}
              >
                Employees
              </NavLink>
            </li>
            <li>
              <NavLink 
                activeClassName="nav-link" 
                to="/owners"
                activeStyle={{
                  color: "cornsilk"
                }}
              >
                Owners
              </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(NavBar);