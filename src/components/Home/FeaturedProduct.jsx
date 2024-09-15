import React from "react";
import "./FeaturedProduct.css";
import ProductCard from "../Products/ProductCard";
const FeaturedProduct = () => {
  return (
    <section className="featured_products">
      <h2>Freatured Products</h2>
      <div className="align_center featured_products_list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default FeaturedProduct;
