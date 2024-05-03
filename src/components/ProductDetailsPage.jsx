import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProducts,
  removeSelectedProducts,
} from "../redux/actions/productActions";
import { addToCart, getTotal } from "../redux/reducers/cartSlice";

const ProductDetailsPage = () => {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description, rating } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProducts());
    };
  }, [productId]);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className="mt-20">
      {Object.keys(product).length === 0 ? (
        <div className="gap-4 w-10/12 m-auto ">
          <div className="skeleton h-96 w-full mb-2"></div>
          <div className="skeleton h-4 w-28 mb-2"></div>
          <div className="skeleton h-4 w-full mb-2"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ) : (
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse  border-x-4 border-amber-300 p-8">
            <div>
              <h1 className="text-4xl font-bold">{title}</h1>
              <p className="py-6 text-wrap">{description}</p>

              <div className="badge badge-secondary p-5 text-base font-bold text-nowrap">
                {category}
              </div>
              <div className="flex justify-between mt-10 text-center">
                <div className=" font-bold text-2xl text-center">
                  PRICE : ${price}
                </div>
                <div className=" font-bold text-2xl">
                  RATING : {rating.rate}⭐
                </div>
              </div>
              <button
                className="btn bg-amber-300 mt-10"
                onClick={() => handleAddToCart(product)}
              >
                ADD TO CART
              </button>
            </div>
            <img src={image} className="max-w-sm p-10" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
