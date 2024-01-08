import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";

const CategoryPreview = ({ id, title, products }) => {
  return (
    <div key={title} className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product, i) => (
            <ProductCard
              key={product.id}
              productId={product.id}
              product={product}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
