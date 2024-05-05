import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProducts,
  selectedProducts,
} from "../redux/actions/productActions";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const products = useSelector((state) => state.product);
  const { id, image, title, description } = products;
  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(
        `https://fakestoreapi.com/products/${Math.floor(Math.random() * 20)}`
      )
      .catch((err) => {
        console.log("Error", err);
      });

    dispatch(selectedProducts(response.data));
  };

  useEffect(() => {
    fetchProductDetails();
    dispatch(removeSelectedProducts());
  }, []);

  return (
    <div className="mt-10">
      {Object.keys(products).length === 0 ? (
        <div className="gap-4 w-10/12 m-auto ">
          <div className="skeleton h-96 w-full mb-2"></div>
          <div className="skeleton h-4 w-28 mb-2"></div>
          <div className="skeleton h-4 w-full mb-2"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ) : (
        <div className="hero mt-10 max-w-screen-xl m-auto" key={id}>
          <div className="hero-content flex-col lg:flex-row-reverse  border-x-4 border-amber-300 p-8">
            <img src={image} className="max-w-64 md:w-16 lg:w-96" />
            <div>
              <h1 className="text-5xl font-bold max-sm:text-2xl">{title}</h1>
              <p className="py-6 max-sm:text-wrap">{description}</p>
              <Link to={`/productDetails/${id}`}>
                <button className="btn bg-amber-300 text-nowrap">
                  VIEW DETAILS
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
