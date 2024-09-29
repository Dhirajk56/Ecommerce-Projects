import React from "react";
import "./ProductList";
import "./ProductList.css";
import ProductCard from "./ProductCard";
import useData from "../../hooks/useData";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Common/Pagination";
const ProductList = () => {
  const [search, setsearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");

  const { data, error, isLoading } = useData(
    "/products",
    {
      params: {
        category,
        page,
      },
    },
    [category, page]
  );
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  const handlePageChange = (page) => {
    const currentParams = Object.fromEntries([...search]);
    setsearch({ ...currentParams, page: page });
  };
  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="sort" id="" className="products_sorting">
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="price asc">Rate LOW to HIGH</option>
        </select>
      </header>
      <div className="products_list">
        {error && <em className="form_error">{error}</em>}

        {isLoading &&
          skeleton.map((n) => {
            <ProductCardSkeleton key={n} />;
          })}
        {data?.products &&
          data.products.map((product) => (
            <ProductCard
              key={product._id}
              id={product._id}
              image={product.images[0]}
              price={product.price}
              title={product.title}
              rating={product.reviews.rate}
              ratingCounts={product.reviews.count}
              stock={product.stock}
            />
          ))}
      </div>
      {data && (
        <Pagination
          totalPosts={data.totalProducts}
          postsPerPage={8}
          onClick={handlePageChange}
          currentPage={page}
        />
      )}
    </section>
  );
};

export default ProductList;
