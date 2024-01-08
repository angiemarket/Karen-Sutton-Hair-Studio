import React, { useContext } from "react";
import Modal from "react-modal";

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  updateDoc,
} from "firebase/firestore";

import { CategoriesContext } from "../../contexts/categories.context";

import { addCollectionAndDocuments } from "../../utils/firebase.utils";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import "./product-modal.styles.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "800px",
    width: "550px",
    backgroundColor: "#ede8e8",
  },
};

Modal.setAppElement("#root");

const ProductModal = ({
  open,
  setOpen,
  formFields,
  setFormFields,
  defaultFormFields,
  category,
  setCategory,
  categoryList,
  title,
  // categoriesMap,
  // setCategoriesMap,
}) => {
  const { categoriesMap, setCategoriesMap } = useContext(CategoriesContext);
  const { name, brand, description, price, quantity } = formFields;
  const db = getFirestore(); // initialize Firestore

  const docRef = doc(db, "categories", "treatments");
  const dbRef = collection(db, "categories");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleFileUpload = (event) => {
    setFormFields({ ...formFields, imageUrl: event.target.files[0].name });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let temp = categoriesMap[category];

      if (title === "Edit") {
        temp = categoriesMap[category].filter(
          (obj) => obj.id !== formFields.id
        );
      }

      temp.push(formFields);

      let newCategoriesMap = { ...categoriesMap, [category]: temp };

      // if (title === "Edit") {
      updateDoc(docRef, formFields)
        .then((docRef) => {
          console.log("Updated successfully!", docRef, newCategoriesMap);
          setCategoriesMap(newCategoriesMap);
        })
        .catch((error) => {
          console.log(error);
        });
      // }
      // if (title === "Add") {
      //   addDoc(dbRef, formFields)
      //     .then((docRef) => {
      //       console.log("Added successfully!", docRef);
      //     })
      //     .catch((error) => {
      //       console.log(error);
      //     });
      // }
    } catch (error) {
      console.log(error);
    }

    setOpen(false);
  };

  return (
    <Modal
      isOpen={open}
      onRequestClose={() => setOpen(false)}
      style={customStyles}
    >
      <div className="product-modal">
        <div className="modal-heading">
          <h3>{title} Product</h3>
          <button
            onClick={() => {
              setFormFields(defaultFormFields);
              setOpen(false);
            }}
          >
            &#x2715;
          </button>
        </div>

        <div className="modal-content">
          <div className="form-container">
            <form className="product-form">
              <div className="input-group">
                <FormInput
                  label="Category"
                  inputType="select"
                  name="category"
                  required
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option disabled>Select category</option>
                  {categoryList?.map((obj) => (
                    <option key={obj} value={obj}>
                      {obj}
                    </option>
                  ))}
                </FormInput>
              </div>

              <div className="input-group">
                <FormInput
                  label="Name"
                  type="text"
                  required
                  onChange={handleChange}
                  name="name"
                  value={name}
                />
              </div>

              <div className="input-group">
                <FormInput
                  label="Brand"
                  type="text"
                  required
                  onChange={handleChange}
                  name="brand"
                  value={brand}
                />
              </div>

              <div className="input-group">
                <FormInput
                  label="Price"
                  type="number"
                  required
                  onChange={handleChange}
                  name="price"
                  value={price}
                />
              </div>

              <div className="input-group">
                <FormInput
                  label="Quantity"
                  type="number"
                  required
                  onChange={handleChange}
                  name="quantity"
                  value={quantity}
                />
              </div>

              <div className="input-group">
                <FormInput
                  inputType="textarea"
                  label="Description"
                  type="text"
                  required
                  onChange={handleChange}
                  name="description"
                  value={description}
                />
              </div>

              <input
                className="custom-file-upload"
                placeholder="file"
                type="file"
                onChange={handleFileUpload}
              />

              <div className="buttons-container">
                <Button type="submit" onClick={handleSubmit}>
                  {title === "Edit" ? "Save" : "Submit"}
                </Button>
                <Button buttonType="grey" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
