import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Headers = () => {
  const [open, setOpen] = useState(false);

  // ---- ACTIVE LINK STYLE FUNCTION ----

  const navClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold border-b-2 "
      : "text-gray-700 hover:text-blue-500";

  return (
    <>
      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* LEFT: Logo */}
            <div className="flex-1">
              <NavLink to="/" className="text-2xl font-bold text-blue-600">
                WorldGyaan
              </NavLink>
            </div>

            {/*  (desktop) */}
            <nav className="hidden md:flex flex-1 justify-center">
              <ul className="flex items-center space-x-8">
                <li><NavLink to="/" className={navClass}>Home</NavLink></li>
                <li><NavLink to="/about" className={navClass}>About</NavLink></li>
                <li><NavLink to="/country" className={navClass}>Country</NavLink></li>
                <li><NavLink to="/contact" className={navClass}>Contact</NavLink></li>
              </ul>
            </nav>

            {/* RIGHT: Buttons (desktop) */}
            <div className="hidden md:flex flex-1 justify-end space-x-4">
              <NavLink
                to="/login"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
              >
                Sign In
              </NavLink>

              <NavLink
                to="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Register
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden block" onClick={() => setOpen(true)}>
              <Menu size={28} />
            </button>

          </div>
        </div>
      </header>

      {/* RIGHT SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-64 z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 p-6 text-lg">
          <NavLink to="/" className={navClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={navClass} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/country" className={navClass} onClick={() => setOpen(false)}>Country</NavLink>
          <NavLink to="/contact" className={navClass} onClick={() => setOpen(false)}>Contact</NavLink>

          <hr className="my-4" />

          <NavLink
            to="/Login"
            onClick={() => setOpen(false)}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md"
          >
            Sign In
          </NavLink>

          <NavLink
            to="/register"
            onClick={() => setOpen(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Register
          </NavLink>
        </ul>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Headers;
   