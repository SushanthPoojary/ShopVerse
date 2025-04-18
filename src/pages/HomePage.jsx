import { useState } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts";
import deskLamp from "../assets/deskLamp.jpg";
import ergonomicChair from "../assets/ergonomicChair.jpg";
import keyboard from "../assets/keyboard.jpg";
import watch from "../assets/watch.jpg";
import speaker from "../assets/speaker.jpg";
import laptopStand from "../assets/laptopStand.jpg";

const HomePage = () => {

    const [cartItems, setCartItems] = useState([]);

    const products = [
        {
            id: 1,
            name: "Modern Desk Lamp",
            price: 129.99,
            rating: 4.8,
            image: deskLamp,
            description: "Sleek and adjustable desk lamp with LED technology",
        },
        {
            id: 2,
            name: "Ergonomic Chair",
            price: 299.99,
            rating: 4.9,
            image: ergonomicChair,
            description: "Premium office chair with lumbar support",
        },
        {
            id: 3,
            name: "Wireless Keyboard",
            price: 89.99,
            rating: 4.7,
            image: keyboard,
            description: "Compact wireless keyboard with backlight",
        },
        {
            id: 4,
            name: "Smart Watch",
            price: 199.99,
            rating: 4.6,
            image: watch,
            description: "Feature-rich smartwatch with health tracking",
        },
        {
            id: 5,
            name: "Bluetooth Speaker",
            price: 79.99,
            rating: 4.5,
            image: speaker,
            description: "Portable speaker with premium sound",
        },
        {
            id: 6,
            name: "Laptop Stand",
            price: 49.99,
            rating: 4.4,
            image: laptopStand,
            description: "Adjustable aluminum laptop stand",
        },
    ];

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="min-h-screen bg-[#0F172A] font-[Inter] text-[#F8FAFC]">
            <Header cartItems={cartItems} />
            <main className="pt-[80px]">
                <HeroBanner />
                <FeaturedProducts products={products} addToCart={addToCart} />
            </main>
        </div>
    )
}

export default HomePage;