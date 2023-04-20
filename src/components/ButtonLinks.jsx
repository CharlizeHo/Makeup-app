import React from "react";
import { Link } from "react-router-dom";

const ButtonLink = ({ path, text, className }) => (
  <Link
    to={path}
    className={`btn border-none bg-orange-500/90 hover:bg-orange-600/90 py-4 px-10 ${className}`}
  >
    {text}
  </Link>
);

export default ButtonLink;
