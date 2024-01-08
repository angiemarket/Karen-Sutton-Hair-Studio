import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    let newCartItems = cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );

    return newCartItems;
  }

  let newCartItems = [...cartItems, { ...productToAdd, quantity: 1 }];
  return newCartItems;
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  let newCartItems = cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
  return newCartItems;
};

const clearCartItem = (cartItems, cartItemToClear) => {
  cartItems?.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  setCartItems: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  setCartTotal: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems?.reduce(
      (total, cartItem) => total + cartItem?.quantity,
      0
    );
    setCartCount(newCartCount);
    window.localStorage.setItem("cartCount", newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems?.reduce(
      (total, cartItem) => total + cartItem?.quantity * cartItem?.price,
      0
    );
    setCartTotal(newCartTotal);
    window.localStorage.setItem("cartTotal", newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));

    window.localStorage.setItem(
      "cartItems",
      JSON.stringify(addCartItem(cartItems, productToAdd))
    );
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));

    window.localStorage.setItem(
      "cartItems",
      JSON.stringify(removeCartItem(cartItems, cartItemToRemove))
    );
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));

    window.localStorage.setItem(
      "cartItems",
      JSON.stringify(removeCartItem(cartItems, cartItemToClear))
    );
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    setCartItems,
    cartCount,
    cartTotal,
    setCartTotal: () => {},
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
