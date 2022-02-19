import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
const Navbar = () => {
  const { toggleModals } = useContext(UserContext);
  return (
    <>
      <nav className="navbar navbar-light bg-light px-5">
        <Link to="/" className="navbar-brand">
          React AuthJS
        </Link>

        <div>
          <button
            className="btn btn-primary"
            onClick={() => toggleModals("signIn")}
          >
            Sign in
          </button>
          <button
            className="btn btn-primary ms-2"
            onClick={() => toggleModals("signUp")}
          >
            Sign up
          </button>
          <button className="btn btn-danger ms-2">Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
