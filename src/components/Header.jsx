import { useState } from "react";
import CartButton from "./CartButton.jsx";
import NavLink from "./NavLink.jsx";

const Header = ({ cartItems }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="fixed w-full bg-[#1E293B] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] z-50">
            <div className="max-w-[1440px] mx-auto px-[24px] py-[16px]">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[48px]">
                        <h1 className="text-[24px] font-bold text-[#F8FAFC]">ShopVerse</h1>
                        <nav className="max-sm:hidden">
                            <ul className="flex gap-[32px]">
                                <li>
                                    <NavLink href="#" label="Home" />
                                </li>
                                <li>
                                    <NavLink href="#" label="Shop" />
                                </li>
                                <li>
                                    <NavLink href="#" label="About" />
                                </li>
                                <li>
                                    <NavLink href="#" label="Contact" />
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-[24px]">
                        <div className="relative max-sm:hidden">
                            <input
                                type="search"
                                placeholder="Search products..."
                                className="w-[300px] px-[16px] py-[8px] rounded-[8px] bg-[#2D3748] text-[#F8FAFC] placeholder-[#A0AEC0] outline-none border-[1px] border-[#4A5568]"
                            />
                        </div>
                        <CartButton cartItems={cartItems} />
                        <button
                            onClick={toggleMobileMenu}
                            className="sm:hidden cursor-pointer"
                            aria-label="Toggle mobile menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 hover:text-[#FBBF24] transition-colors duration-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="sm:hidden mt-4 py-4 border-t border-[#334155]">
                        <nav>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <NavLink href="#" label="Home" />
                                </li>
                                <li>
                                    <NavLink href="#" label="Shop" />
                                </li>
                                <li>
                                    <NavLink href="#" label="About" />
                                </li>
                                <li>
                                    <NavLink href="#" label="Contact" />
                                </li>
                            </ul>
                        </nav>
                        <div className="mt-4">
                            <input
                                type="search"
                                placeholder="Search products..."
                                className="w-full px-[16px] py-[8px] rounded-[8px] bg-[#2D3748] text-[#F8FAFC] placeholder-[#A0AEC0] outline-none border-[1px] border-[#4A5568]"
                            />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
