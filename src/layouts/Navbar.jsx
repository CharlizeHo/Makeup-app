import React from "react";
import Logo from "../../public/logo.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "rgb(251 146 60)" : "",
    };
  };
  const links = [
    {
      index: 1,
      path: "/",
      name: "Home",
    },
    {
      index: 2,
      path: "/products",
      name: "Products",
    },
    {
      index: 3,
      path: "/about",
      name: "About",
    },
    {
      index: 4,
      path: "/ListUsers",
      name: "Users",
    },
  ];
  return (
    <nav className="shadow-md">
      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4 h-navbar">
        {/* Layout */}
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <NavLink to="/">
            <img src={Logo} alt="Nikee Logo" className="h-12 w-18" />
          </NavLink>
          <div>
            {links.map((link, index) => (
              <NavLink
                style={navLinkStyle}
                className="text-lg mr-8 hover:underline hover:underline-offset-4 hover:decoration-orange-400"
                to={link.path}
                key={`${link.name}-${index}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div>
            <button className="btn btn-ghost btn-circle">
              <NavLink to="/profile" className="flex items-center gap-2">
                <div className="indicator">
                  <span className="w-8">
                    <i className="fa-solid fa-user"></i>
                  </span>
                </div>
              </NavLink>
            </button>
            <button className="btn btn-ghost btn-circle">
              <NavLink to="/mycart" className="flex items-center gap-2">
                <div className="indicator">
                  <span className="w-8">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span className="badge badge-xs badge-warning indicator-item">
                    0
                  </span>
                </div>
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
