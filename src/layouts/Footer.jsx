import React from "react";
import { Link, NavLink } from "react-router-dom";
import links from "./footerlinks.json";
import Logo from "../../public/logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-light flex flex-row justify-between p-8">
        <div>
          <NavLink to="/">
            <img
              src={Logo}
              alt="Nikee Logo"
              className="h-15 w-20 sm:h-[100px] sm:w-[120px]"
            />
          </NavLink>
        </div>
        <div className="flex md:flex-row justify-between md:mx-auto gap-3">
          {links.map((item) => (
            <div className="flex flex-col flex-wrap" key={item.title}>
              <h6 className="text-sm text-orange-500/90 uppercase font-semibold">
                {item.title}
              </h6>
              <div>
                {item.links.map((link) => (
                  <Link
                    to={link.path}
                    key={link.name}
                    className="lowercase text-sm block text-white hover:text-yellow-500"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="flex flex-col gap-4 ml-2 md:mr-10 text-orange-500">
          <i className="fa-brands fa-facebook  hover:text-yellow-500"></i>
          <i className="fa-brands fa-twitter  hover:text-yellow-500"></i>
          <i className="fa-brands fa-instagram  hover:text-yellow-500"></i>
        </button>
      </footer>
    </div>
  );
};

export default Footer;
