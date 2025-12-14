import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext)
  const handleLogOut = () => {
    //  console.log("user trying to log out")
    logOut()
      .then(() => {
        alert("You logged out successfully");
      })
      .then(error => {
        // console.log(error);
      })
  }

  const links = <>
    <div className="nav flex gap-5 text-accent ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
    </div>
  </>

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Green Nest </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="login-btn flex gap-5">
          <img className="w-12 rounded-full" src={`${user ?
            (
              // adding to show name and photo
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL}
                  alt={user.displayName}
                  className="w-8 h-8 rounded-full"
                />
                <span>{user.displayName}</span>
              </div>
            )

            : userIcon}`} alt="" />
          {
            user ? (<button onClick={handleLogOut} className="btn btn-primary">Log Out</button>) : (<Link to="/auth/login" className="btn btn-primary px-10 ">Login</Link>)
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
