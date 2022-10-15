import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-neutral text-neutral-content">
      <div className="navbar gap-6 container mx-auto">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
        <Link to="home">home</Link>
        <Link to="login">login</Link>
        <Link to="register">register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
