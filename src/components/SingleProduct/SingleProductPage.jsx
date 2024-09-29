import React, { useState } from "react";
import "./singleProductPage.css";
import QuantityInput from "./QuantityInput";
import { useParams } from "react-router-dom";
import useData from "../../hooks/useData";

const SingleProductPage = () => {
  const { id } = useParams();
  const [selectedImage, setselectedImage] = useState(0);
  const { data: product, error, isLoading } = useData(`/products/${id}`);
  const [quantity, setquantity] = useState(1);
  return (
    <section className="align_center single_product">
      {error && <em className="form_error">{error}</em>}

      {product && (
        <>
          <div className="align_center">
            <div className="single_product_thumbnails">
              {product.images.map((image, index) => (
                <img
                  src={`http://localhost:5000/products/${image}`}
                  alt={product.title}
                  className={selectedImage === index ? "selected_image" : ""}
                  onClick={() => setselectedImage(index)}
                />
              ))}
            </div>
            <img
              src={`http://localhost:5000/products/${product.images[selectedImage]}`}
              alt={product.title}
              className="single_product_display"
            />
          </div>
          <div className="single_product_details">
            <h1 className="single_product_title">{product.title}</h1>
            <p className="single_product_description">{product.description}</p>
            <p className="single_product_price">${product.price.toFixed(2)}</p>
            <h2 className="quantity_title">Quantity:</h2>
            <div className="align_center quantity_input">
              <QuantityInput
                quantity={quantity}
                setQuantity={setquantity}
                stock={product.stock}
              />
            </div>
            <button className="search_button add_cart">Add to Cart</button>
          </div>
        </>
      )}
    </section>
  );
};

export default SingleProductPage;
