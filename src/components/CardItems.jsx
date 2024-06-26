import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, getTotal } from "../redux/reducers/cartSlice";

const CardItems = () => {
  const products = useSelector((state) => state.allProducts.products);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <>
      {products.map((p) => (
        <div
          className="card w-80 shadow-xl max-h-96 border-x-4 border-amber-300"
          key={p.id}
        >
          <figure>
            <img src={p.image} alt={p.category} className=" h-32" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-base font-bold text-nowrap">
              {p.title.slice(0, 12)}
              <div className="badge badge-secondary text-xs text-nowrap">
                {p.category}
              </div>
            </h2>
            <p className="text-xs">{p.description.slice(0, 100)}</p>

            <div className="card-actions justify-between mx-2 my-4">
              <div className="font-bold text-sm">Price : ${p.price}</div>
              <div className="font-bold text-sm">
                Rating : {p.rating.rate}⭐
              </div>
            </div>
            <div className="flex gap-2 justify-evenly">
              <button
                className="btn bg-amber-300 text-xs w-28 text-nowrap"
                onClick={() => handleAddToCart(p)}
              >
                ADD TO CART
              </button>

              <Link to={`/productDetails/${p.id}`}>
                <button className="btn bg-amber-300 text-xs w-28 text-nowrap">
                  VIEW DETAILS
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardItems;
