import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light px-5">
        <Link to="/" className="navbar-brand">
          React AuthJS
        </Link>

        <div>
          <button className="btn btn-primary">Sign in</button>
          <button className="btn btn-primary ms-2">Sign up</button>
          <button className="btn btn-danger ms-2">Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
