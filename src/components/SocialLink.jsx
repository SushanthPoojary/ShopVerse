import { useState } from "react";

const SocialLink = ({ href, name, icon }) => {

    return (
        <a
            href={href}
            className="bg-[#334155] p-[12px] rounded-[8px] hover:text-[#FBBF24] transition-colors duration-200"
            target="_blank"
            aria-label={`Follow us on ${name}`}
        >
            {icon}
        </a>
    );
};

export default SocialLink;
