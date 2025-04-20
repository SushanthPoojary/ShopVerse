import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const { name, price, rating, image, description } = product;

    const dispatch = useDispatch();

    // console.log(addToCart);
    // console.log(product);

    const handleClick = (e) => {
        e.preventDefault();
        // console.log(e);
        // addToCart(product);
        dispatch(addToCart(product));
    }

    return (
        <article
            className="bg-[#1E293B] rounded-[12px] overflow-hidden shadow-lg transition-transform duration-300"
            style={{ transform: isHovered ? "translateY(-8px)" : "none" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="h-[240px] overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300"
                    style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
                />
            </div>
            <div className="p-[24px]">
                <div className="flex justify-between items-start mb-[12px]">
                    <h4 className="text-[20px] font-bold">{name}</h4>
                    <div className="flex items-center">
                        <span className="text-[#FBBF24]">★</span>
                        <span className="ml-1 text-[14px]">{rating}</span>
                    </div>
                </div>
                <p className="text-[#E2E8F0] text-[14px] mb-[16px]">{description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-[24px] font-bold text-[#FBBF24]">₹{price}</span>
                    <button
                        onClick={handleClick}
                        className="px-[16px] py-[8px] bg-[#334155] hover:bg-[#475569] rounded-[8px] text-[14px] font-medium transition-colors duration-200 cursor-pointer"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
