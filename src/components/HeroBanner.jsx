import React, { useState } from "react";
// import heroBanner from "../assets/heroBanner.jpg";
import { Link } from "react-router";

const HeroBanner = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="relative h-[600px] bg-gradient-to-r from-[#1E293B] to-[#0F172A]">
            <div className="absolute inset-0">
                <img
                    src="/images/heroBanner.jpg"
                    alt="Banner"
                    className="w-full h-full object-cover opacity-[0.3]"
                    loading="lazy"
                />
            </div>
            <div className="relative max-w-[1440px] mx-auto px-[24px] py-[120px]">
                <h2 className="text-[48px] font-bold max-w-[600px] mb-[24px] text-[#E2E8F0]">
                    Discover Amazing Products
                </h2>
                <p className="text-[20px] text-[#E2E8F0] max-w-[500px] mb-[32px]">
                    Shop the latest trends and innovative products at unbeatable prices.
                </p>
                <Link to="/products">
                    <button
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        style={{ transform: isHovered ? "translateY(-2px)" : "none" }}
                        className="px-[32px] py-[16px] bg-[#FBBF24] text-[#1E293B] rounded-[8px] font-bold transition-transform duration-200 cursor-pointer"
                    >
                        Shop Now
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default HeroBanner;
