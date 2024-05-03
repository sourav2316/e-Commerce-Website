import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import CardItems from "./CardItems";
import { setProducts } from "../redux/actions/productActions";

const Card = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid place-items-center gap-16 mt-10 p-20 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 max-sm:grid-cols-1">
      <CardItems />
    </div>
  );
};

export default Card;
