import { useState } from "react";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import FeaturedProducts from "../components/FeaturedProducts";

const HomePage = ({ products }) => {

    return (
        <div className="homepage">
            <HeroBanner />
            <FeaturedProducts />
        </div>
    )
}

export default HomePage;