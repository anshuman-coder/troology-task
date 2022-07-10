import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const handleLogout = () => {
    window.open("http://localhost:8080/auth/logout", "_self");
  };

  return (
    <div className="flex justify-evenly w-full p-5 font-bold bg-slate-400 text-slate-800">
      <Link to="/">
        <h2 className="hover:text-red-200 cursor-pointer">Task Troology</h2>
      </Link>
      {user?.success && (
        <h2
          onClick={handleLogout}
          className="hover:text-red-200 cursor-pointer"
        >
          logout
        </h2>
      )}
    </div>
  );
};

export default Navbar;
