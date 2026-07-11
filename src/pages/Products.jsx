import { useState } from "react";
import products from "../data/AkokData";
import ProductCard from "../components/ProductCard";
import useLang from "../context/useLang";

export default function Products() {
  const { t } = useLang();

  // State to manage the active category filter
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter products based on selected category
  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) =>
          product.category.includes(activeCategory)
        );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Page header section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">
          {t.productsSection.title}
        </h1>
        <p className="text-gray-500">{t.productsSection.subtitle}</p>
      </div>

      {/* Modern horizontal scrollable category strip */}
      <div className="mb-12 w-full overflow-hidden">
        <div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
          {["all", "skin", "hair", "body"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-7 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full capitalize whitespace-nowrap transition-all duration-300 text-sm md:text-base lg:text-lg font-medium ${
                activeCategory === cat
                  ? "bg-black text-white shadow-lg"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products grid display */}
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10">
            No products found in this category.
          </p>
        )}
      </div>
    </div>
  );
}