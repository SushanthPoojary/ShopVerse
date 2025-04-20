import React, { useState } from "react";
import { NavLink } from "react-router";

const NaviLink = ({ href, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <NavLink
      to={href}
      style={({ isActive }) => {
        return {
          color: isActive ? "#FBBF24" : "",
        };
      }}
      className="hover:text-[#FBBF24] transition-colors duration-200"
    >
      {label}
    </NavLink>
  );
};

export default NaviLink;
