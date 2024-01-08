import { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";
import SearchBar from "../../components/search-bar/search-bar.component";
import Pagination from "../../components/pagination/pagination.component";
import Loading from "../../components/loading/loading.component";
// import ShopFilters from "../../components/shop-filters/shop-filters.component";
import Footer from "../../components/footer/footer.component";

import { CategoriesContext } from "../../contexts/categories.context";

import scroll_up_arrow_img from "../../assets/scroll-up.png";
import left_arrow_img from "../../assets/left-arrow.png";

import { scrollToTop } from "../../utils/common.utils";

import { Tooltip as ReactTooltip } from "react-tooltip";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [search, setSearch] = useState("");

  const itemsPerPage = 24;
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);

  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentPosts = filteredProducts?.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    setProducts(categoriesMap[category]);
    // setFilteredProducts(categoriesMap[category]);
  }, [categoriesMap, category, search]);

  useEffect(() => {
    setFilteredProducts(products);
    setTotal(products?.length);
  }, [products]);

  useEffect(() => {
    if (search === "") setFilteredProducts(products);
    else {
      setCurrentPage(1);
      setFilteredProducts(
        products?.filter((obj) =>
          obj.name?.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [currentPage]);

  if (!products) return <Loading />;

  return (
    <>
      <div className="category-page-container">
        <div>
          <img
            onClick={() => navigate("/shop")}
            className="back-button"
            src={left_arrow_img}
            alt="back button"
            data-tooltip-id="back-tooltip"
          />
        </div>

        <h2 className="category-title">{category.toUpperCase()}</h2>

        <SearchBar
          search={search}
          setSearch={setSearch}
          products={products}
          setProducts={setProducts}
        />

        {/* <ShopFilters /> */}

        <div className="category-container">
          {filteredProducts &&
            currentPosts?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>

        {filteredProducts?.length > 25 ? (
          <Pagination
            products={products}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            total={total}
          />
        ) : (
          <div style={{ height: "40px" }}></div>
        )}
      </div>

      <ReactTooltip
        id="scroll-tooltip"
        place="bottom"
        content="Scroll to top"
      />
      <ReactTooltip
        id="back-tooltip"
        place="bottom"
        content="Back to product categories"
      />

      {/* Scroll to Top Arrow */}
      <img
        onClick={scrollToTop}
        className="scroll-up-arrow-image"
        src={scroll_up_arrow_img}
        alt="scroll up arrow"
        data-tooltip-id="scroll-tooltip"
      />

      <Footer />
    </>
  );
};

export default Category;
