import React, { createContext, useEffect, useState } from "react";

const Url = "https://shoppingapp-backend-j4hr.onrender.com";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  const cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItems] = useState(getDefaultCart());
  const [all_product, setAll_Product] = useState([]);

  useEffect(() => {
    // Fetch all products
    fetch(`${Url}/allproduct`)
      .then((res) => res.json())
      .then((data) => setAll_Product(data));

    // Check if user is logged in
    const token = localStorage.getItem("auth-token");
    if (token) {
      // Fetch user's cart data
      fetch(`${Url}/getcart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "auth-token": token,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setCartItems(data));
    } else {
      // Reset the cart if not logged in
      setCartItems(getDefaultCart());
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      const token = localStorage.getItem("auth-token");
      if (token) {
        fetch(`${Url}/addtocart`, {
          method: "POST",
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: itemId }),
        });
      }
      return newCart;
    });
  };

  const removeToCart = (itemId) => {
    setCartItems((prev) => {
      const newCart = {
        ...prev,
        [itemId]: Math.max((prev[itemId] || 1) - 1, 0),
      };
      const token = localStorage.getItem("auth-token");
      if (token) {
        fetch(`${Url}/removefromcart`, {
          method: "POST",
          headers: {
            "auth-token": token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ itemId: itemId }),
        });
      }
      return newCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const handleLogout = () => {
    localStorage.removeItem("auth-token"); // Clear the token
    setCartItems(getDefaultCart()); // Reset the cart
  };

  const ContextValue = {
    getTotalCartAmount,
    getTotalCartItem,
    all_product,
    cartItem,
    addToCart,
    removeToCart,
    handleLogout,
  };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
