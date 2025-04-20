const FilterSidebar = ({ categories, selectedCategory, setSelectedCategory, sortBy, setSortBy, priceRange, setPriceRange }) => {
    return (
        <div className="sticky transition-all duration-[0.3s] ease-[ease] h-fit top-[100px] w-[280px] max-md:w-60 max-sm:relative max-sm:top-0 max-sm:p-4 max-sm:mb-6 max-sm:w-full max-sm:rounded-xl max-sm:bg-slate-800">
            <div className="bg-[#1E293B] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Filters</h3>
                <div className="mb-6">
                    <h4 className="font-medium mb-2">Category</h4>
                    <div className="space-y-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="w-full text-left px-3 py-2 rounded transition"
                                onClick={() => setSelectedCategory(category)}
                                style={{
                                    backgroundColor: selectedCategory === category ? "#FBBF24" : "transparent",
                                    color: selectedCategory === category ? "#1E293B" : "inherit",
                                }}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="mb-6">
                    <h4 className="font-medium mb-2">Sort By</h4>
                    <select
                        className="w-full bg-[#334155] text-[#F8FAFC] px-3 py-2 rounded"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="featured">Featured</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name">Name</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
                <div>
                    <h4 className="font-medium mb-2">Price Range</h4>
                    <div className="space-y-4">
                        <input
                            type="range"
                            min="0"
                            max="10000"
                            step="10"
                            className="w-full"
                            value={priceRange.max}
                            onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                        />
                        <div className="text-sm">
                            <span>Up to ₹</span>
                            <span>{priceRange.max}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;