import { useState } from "react";

import "./search-bar.styles.scss";

const SearchBar = ({ search, setSearch, products, setProducts }) => {
  //   const [search, setSearch] = useState("");

  return (
    <div className="search-bar-container">
      <input
        className="custom-input-field"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="SEARCH BY PRODUCT NAME"
      />
    </div>
  );
};

export default SearchBar;
