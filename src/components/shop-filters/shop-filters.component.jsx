const ShopFilters = () => {
  return (
    <div className="filters-container">
      {/* <p>Apply Filters:</p>
          {["Kevin Murphy", "Evo", "Wash/Shampoo", "Rinse/Conditioner"].map(
            (obj) => (
              <div className="filter" key={obj}>
                {obj}
              </div>
            )
          )} */}

      {/* <div className="column">
            <p>Filter By:</p>
            <select className="custom-select">
              <option selected disabled>
                BY TYPE
              </option>
              {["Shampoo/Cleanse", "Conditioner/Rinse"].map((obj) => (
                <option key={obj} value={obj}>
                  {obj.toUpperCase()}
                </option>
              ))}
            </select>
            <select className="custom-select">
              <option selected disabled>
                BY BRAND
              </option>
              {["Kevin Murphy", "Evo"].map((obj) => (
                <option key={obj} value={obj}>
                  {obj.toUpperCase()}
                </option>
              ))}
            </select>
          </div>

          <div className="column">
            <select className="custom-select">
              <option selected disabled>
                SORT BY
              </option>
              {[
                "Price low to high",
                "Price high to low",
                "Product name A-Z",
                "Product name Z-A",
              ].map((obj) => (
                <option key={obj} value={obj}>
                  {obj.toUpperCase()}
                </option>
              ))}
            </select>
          </div> */}
    </div>
  );
};

export default ShopFilters;
