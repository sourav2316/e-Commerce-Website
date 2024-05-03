import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotal,
  removeFromCart,
} from "../redux/reducers/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };

  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const handleClearCart = (cartItem) => {
    dispatch(clearCart(cartItem));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className="cart-container mt-10">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your Cart is currently empty</p>
          <div className="start-shopping">
            <Link to={"/"}>
              <FaLongArrowAltLeft />
              <p>Start Shoping</p>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="product-title">Products</h3>
            <h3 className="price">Price</h3>
            <h3 className="Quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((cart) => (
              <div className="cart-item" key={cart.id}>
                <div className="cart-product">
                  <img src={cart.image} alt={cart.title} />
                  <div>
                    <h3>{cart.title} </h3>
                    <p>{cart.description.slice(0, 120)} </p>
                    <button
                      className="btn btn-error text-black"
                      onClick={() => handleRemoveFromCart(cart)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="cart product-price">${cart.price}</div>
                <div className="cart-product-quantity">
                  <button
                    className="btn"
                    onClick={() => handleDecreaseCart(cart)}
                  >
                    -
                  </button>
                  <div className="count"> {cart.cartQuantity} </div>
                  <button
                    className="btn"
                    onClick={() => handleIncreaseCart(cart)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-product-total-price">
                  Price : $
                  {Math.floor(cart.price * cart.cartQuantity * 100) / 100}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button
              className="btn btn-error text-white"
              onClick={() => handleClearCart(cart)}
            >
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>SubTotal</span>
                <span className="amount">
                  ${Math.floor(cart.cartTotalAmount * 100) / 100}
                </span>
              </div>
              <p>Taxes and Shipping at checkout</p>
              <button className="btn bg-amber-300">Checkout</button>
              <div className="continue-shopping">
                <Link to={"/"}>
                  <FaLongArrowAltLeft />
                  <p>Continue Shoping</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
