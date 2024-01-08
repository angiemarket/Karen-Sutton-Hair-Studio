import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";
import { CategoriesContext } from "../../contexts/categories.context";

import { scrollToTop } from "../../utils/common.utils";
// import { addCollectionAndDocuments } from "../../utils/firebase.utils";

import Pagination from "../../components/pagination/pagination.component";
import Footer from "../../components/footer/footer.component";
import Button from "../../components/button/button.component";
import ProductModal from "../../components/product-modal/product-modal.component";
import DeleteModal from "../../components/delete-modal/delete.modal";

import edit_icon from "../../assets/edit.svg";
import delete_icon from "../../assets/delete.svg";
import scroll_up_arrow_img from "../../assets/scroll-up.png";

import { Tooltip as ReactTooltip } from "react-tooltip";

import "./manage-store.styles.scss";

const defaultFormFields = {
  id: uuidv4(),
  name: "",
  brand: "",
  imageUrl: "",
  description: "",
  price: 0,
  quantity: 0,
};

const ManageStorePage = () => {
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const [products, setProducts] = useState([]);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [mode, setMode] = useState("");
  const [category, setCategory] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  const { currentUser } = useContext(UserContext);
  const { categoriesMap, setCategoriesMap } = useContext(CategoriesContext);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(1);

  const lastPostIndex = currentPage * itemsPerPage;
  const firstPostIndex = lastPostIndex - itemsPerPage;
  const currentPosts = products?.slice(firstPostIndex, lastPostIndex);

  const columns = ["name", "brand", "description", "price", "quantity", "", ""];
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser?.email !== "angiemermed@gmail.com") navigate("/");
  }, [currentUser]);

  useEffect(() => {
    setCategoryList(Object.keys(categoriesMap).map((title) => title));
  }, [categoriesMap]);

  useEffect(() => {
    let temp = [];

    Object.keys(categoriesMap).map((title, i) => {
      setProducts(categoriesMap[title]);
      // console.log(categoriesMap[title].length);
      temp.push(categoriesMap[title].length);
    });

    setTotal(temp);

    // setTotal(categoriesMap[category]?.length);
  }, [categoriesMap]);

  const removeItemHandler = () => {
    let temp = categoriesMap[category];

    temp = categoriesMap[category].filter((obj) => obj.id !== formFields.id);

    let newCategoriesMap = { ...categoriesMap, [category]: temp };

    console.log(newCategoriesMap);

    setDeleteModal(false);
  };

  return (
    <>
      <div className="manage-store-page">
        <div className="flex">
          <h1>MANAGE STORE</h1>
          {/* <Button
            onClick={() => {
              setMode("Add");
              setEditModal(!editModal);
            }}
          >
            Add
          </Button> */}
        </div>
        {Object.keys(categoriesMap).map((title, i) => {
          // const products = categoriesMap[title];
          // setProducts(categoriesMap[title]);

          return (
            <div key={i}>
              <div className="manage-store-container">
                <h2>{title.toUpperCase()}</h2>
                <div className="table">
                  <div className="thead">
                    {columns.map((column, i) => (
                      <div key={i}>{column}</div>
                    ))}
                  </div>

                  {currentPosts?.map((product) => (
                    <div className="tbody" key={product.id}>
                      <div className="name">
                        <img
                          className="product-image"
                          src={product.imageUrl}
                          alt={`${product.name}`}
                        />
                        <p>{product.name.toUpperCase()}</p>
                      </div>
                      <div>{product.brand}</div>
                      <div>{product.description}</div>
                      <div className="price">${product.price}.00</div>
                      <div>{product.quantity}</div>
                      <img
                        className="edit-icon"
                        src={edit_icon}
                        alt="Edit"
                        onClick={() => {
                          setMode("Edit");
                          setCategory(title);
                          setFormFields(product);
                          setEditModal(!editModal);
                        }}
                      />
                      <ProductModal
                        category={category}
                        setCategory={setCategory}
                        title={mode}
                        categoryList={categoryList}
                        open={editModal}
                        setOpen={setEditModal}
                        defaultFormFields={defaultFormFields}
                        formFields={formFields}
                        setFormFields={setFormFields}
                        categoriesMap={categoriesMap}
                        setCategoriesMap={setCategoriesMap}
                      />
                      <img
                        className="edit-icon"
                        src={delete_icon}
                        alt="Delete"
                        onClick={() => {
                          setDeleteModal(!deleteModal);
                          setCategory(title);
                          setFormFields(product);
                        }}
                      />
                      <DeleteModal
                        open={deleteModal}
                        setOpen={setDeleteModal}
                        removeItem={removeItemHandler}
                        title={`Delete confirmation`}
                        message={`Are you sure you want to delete this item from the cart? The
                        item will be permanently removed. This action cannot be undone.`}
                        buttonText={`Delete`}
                      />
                    </div>
                  ))}

                  {products?.length > 10 ? (
                    <Pagination
                      products={products}
                      itemsPerPage={itemsPerPage}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      total={total}
                      index={i}
                    />
                  ) : (
                    <div style={{ height: "40px" }}></div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <img
        onClick={scrollToTop}
        className="scroll-up-arrow-image"
        src={scroll_up_arrow_img}
        alt="scroll to top arrow"
        data-tooltip-id="scroll-tooltip"
      />
      <ReactTooltip
        id="scroll-tooltip"
        place="bottom"
        content="Scroll to top"
      />

      <Footer />
    </>
  );
};

export default ManageStorePage;
