import { useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Loading from "../../components/loading/loading.component";
import Footer from "../../components/footer/footer.component";

import { scrollToTop } from "../../utils/common.utils";

import arrow_img from "../../assets/right-arrow.png";
import scroll_up_arrow_img from "../../assets/scroll-up.png";

import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  if (!categoriesMap) return <Loading />;

  return (
    <div className="categories-preview-page-container">
      <div className="header">
        <p>
          SHOP OUR <b>HIGH QUALITY</b> PRODUCTS TO MEET YOUR HAIR CARE NEEDS
        </p>
      </div>

      <div className="categories-preview-container">
        {Object.keys(categoriesMap).map((title, i) => {
          const products = categoriesMap[title];
          return (
            <div key={i}>
              <div className="flex">
                <CategoryPreview title={title} products={products} />
                <Link to={title}>
                  <img
                    className="arrow-image"
                    src={arrow_img}
                    alt="right-arrow-image"
                    data-tooltip-id="next-tooltip"
                  />
                </Link>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <img
        onClick={scrollToTop}
        className="scroll-up-arrow-image"
        src={scroll_up_arrow_img}
        alt="scroll up arrow"
        data-tooltip-id="scroll-tooltip"
      />

      <ReactTooltip
        id="scroll-tooltip"
        place="bottom"
        content="Scroll to top"
      />
      <ReactTooltip id="next-tooltip" place="bottom" content="See more" />
      <Footer />
    </div>
  );
};

export default CategoriesPreview;
