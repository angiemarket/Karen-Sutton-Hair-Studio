import { createContext, useState, useEffect } from "react";

import {
  getCategoriesAndDocuments,
  // addCollectionAndDocuments,
} from "../utils/firebase.utils";

// import SHOP_DATA from "../shop-data.js";
// import SERVICES_DATA from "../services-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();

    // addCollectionAndDocuments("services", SERVICES_DATA);
  }, []);

  const value = { categoriesMap, setCategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
