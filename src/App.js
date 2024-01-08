import { Routes, Route } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { CartContext } from "./contexts/cart.context";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import About from "./routes/about/about.component";
import Stylists from "./routes/stylists/stylists.component";
import Services from "./routes/services/services.component";
import Contact from "./routes/contact/contact.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import ManageStore from "./routes/manage-store/manage-store.component";
import AccountHistory from "./routes/account-history/account-history.component";
import MobileNavigation from "./routes/mobile-navigation/mobile-navigation.component";

const App = () => {
  const { setCartItems, setCartTotal } = useContext(CartContext);

  useEffect(() => {
    if (window?.localStorage?.cartItems) {
      let temp = JSON.parse(window?.localStorage?.cartItems);
      setCartItems(temp);
      setCartTotal(window.localStorage?.cartTotal);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="stylists" element={<Stylists />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="manage-all-products" element={<ManageStore />} />
        <Route path="account-history" element={<AccountHistory />} />
      </Route>
    </Routes>
  );
};

export default App;
