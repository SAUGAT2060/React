import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo + Title */}
        <Link to="/" className="text-center sm:text-left mb-4 sm:mb-0 flex items-center gap-2">
          <span className="text-xl font-bold">📚 BookFinder</span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 underline underline-offset-4"
                  : "hover:text-orange-400 transition duration-150"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 underline underline-offset-4"
                  : "hover:text-orange-400 transition duration-150"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 underline underline-offset-4"
                  : "hover:text-orange-400 transition duration-150"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/github"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 underline underline-offset-4"
                  : "hover:text-orange-400 transition duration-150"
              }
            >
              GitHub
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
