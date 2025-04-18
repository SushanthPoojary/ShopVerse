import React, { useState } from "react";

const NavLink = ({ href, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="font-medium transition-colors duration-200"
      style={{ color: isHovered ? "#FBBF24" : "#F8FAFC" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </a>
  );
};

export default NavLink;
