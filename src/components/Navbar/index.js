import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        {/* <NavLink to="/">
          <img src={require("../../images/logo.svg")} alt="logo" />
        </NavLink> */}
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/jobs" activeStyle>
            Jobs
          </NavLink>
          <NavLink to="/candidates" activeStyle>
            Candidates
          </NavLink>
          <NavLink to="/post_job" activeStyle>
            Post Job
          </NavLink>
          <NavLink to="/contact_us" activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavLink to="/sign_up" activeStyle>
            Sign Up
          </NavLink>
          <NavBtnLink to="/Sign_in">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
