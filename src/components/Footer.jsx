import SocialLink from "./SocialLink";

const Footer = () => {
    return (
        <footer className="bg-[#1E293B] mt-[64px] border-t-[1px] border-[#334155]">
            <div className="max-w-[1440px] mx-auto px-[24px] py-[64px]">
                <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-[48px]">
                    <div>
                        <h6 className="text-[16px] font-bold mb-[24px] text-[#FBBF24]">
                            About ShopVerse
                        </h6>
                        <p className="text-[#E2E8F0] leading-[1.8] mb-[24px]">
                            Your premier destination for curated lifestyle products.
                            Experience exceptional quality and service with every purchase.
                        </p>
                        <div className="flex gap-[16px]">
                            <SocialLink
                                href="#"
                                name="facebook"
                                icon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                }
                            />
                            <SocialLink
                                href="#"
                                name="twitter"
                                icon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                }
                            />
                            <SocialLink
                                href="#"
                                name="instagram"
                                icon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                }
                            />
                        </div>
                    </div>

                    <div>
                        <h6 className="text-[16px] font-bold mb-[24px] text-[#FBBF24]">
                            Quick Links
                        </h6>
                        <ul className="space-y-[12px]">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#E2E8F0] hover:text-[#FBBF24] transition-colors duration-200"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#E2E8F0] hover:text-[#FBBF24] transition-colors duration-200"
                                >
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#E2E8F0] hover:text-[#FBBF24] transition-colors duration-200"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#E2E8F0] hover:text-[#FBBF24] transition-colors duration-200"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#E2E8F0] hover:text-[#FBBF24] transition-colors duration-200"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-[16px] font-bold mb-[24px] text-[#FBBF24]">
                            Customer Service
                        </h6>
                        <ul className="space-y-[12px]">
                            <li>
                                <a
                                    href="#"
                                    className="text-[#E2E8F0] hover:text-[#FBBF24] transition-colors duration-200"
                                >
                                    Shipping Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#E2E8F0] hover:text-[#FBBF24] transition-colors duration-200"
                                >
                                    Returns & Refunds
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#E2E8F0] hover:text-[#FBBF24] transition-colors duration-200"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#E2E8F0] hover:text-[#FBBF24] transition-colors duration-200"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-[#E2E8F0] hover:text-[#FBBF24] transition-colors duration-200"
                                >
                                    Track Order
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-[16px] font-bold mb-[24px] text-[#FBBF24]">
                            Newsletter
                        </h6>
                        <p className="text-[#E2E8F0] leading-[1.8] mb-[16px]">
                            Subscribe to our newsletter for updates on new products and
                            special offers.
                        </p>
                        <div className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full flex-1 px-[16px] py-[12px] rounded-lg bg-[#2D3748] text-[#F8FAFC] placeholder-[#A0AEC0] outline-none border border-[#475569 focus:border-[#FBBF24] transition-all duration-300"
                            />
                            <button className="px-[16px] py-[12px] bg-[#FBBF24] text-[#1E293B] rounded-lg font-bold w-full hover:-translate-y-[2px] transition-transform duration-200 cursor-pointer">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-[48px] pt-[24px] border-t-[1px] border-[#334155] text-center text-[#A0AEC0]">
                    <p>
                        &copy; {new Date().getFullYear()} ShopVerse. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
