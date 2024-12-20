import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../utils/Context";
import "./Edit.css";

const Edit = () => {
  const [products, setProducts] = useContext(productContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    title: "",
    image: "",
    price: "",
    category: "",
    description: "",
  });

  // Fetch the product to edit based on ID
  useEffect(() => {
    if (products.length > 0) {
const existingProduct = products.find((p) => String(p.id) === String(id));
      if (existingProduct) {
        setProduct(existingProduct); // Set the correct product object
      } else {
        console.error("Product not found for id:", id);
      }
    }
  }, [id]);

  // Handle input changes
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
  e.preventDefault();

  // Basic Validation
  if (product.title.trim().length < 4) {
    alert("Title must be at least 4 characters.");
    return;
  }
  if (!product.image || !product.image.startsWith("http")) {
    alert("Please provide a valid image URL.");
    return;
  }
  if (isNaN(product.price) || Number(product.price) <= 0) {
    alert("Price must be a valid positive number.");
    return;
  }
  if (product.category.trim().length < 3) {
    alert("Category must be at least 3 characters.");
    return;
  }
  if (product.description.trim().length < 10) {
    alert("Description must be at least 10 characters.");
    return;
  }

  // Update the product list
  const updatedProducts = products.map((p) =>
    String(p.id) === String(id) ? { ...p, ...product } : p
  );

  // Update the state
  setProducts(updatedProducts);

  // Save to localStorage
  localStorage.setItem("products", JSON.stringify(updatedProducts));

  // Navigate to home
  navigate("/");
};



  // Loading fallback if product is not yet found
  if (!product.title && products.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="form-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={product.title}
            onChange={changeHandler}
            placeholder="Enter title"
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="url"
            name="image"
            value={product.image}
            onChange={changeHandler}
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={changeHandler}
            placeholder="Enter price"
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={changeHandler}
            placeholder="Enter description"
            rows="3"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={changeHandler}
            placeholder="Enter category"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Edit Product
        </button>
      </form>
    </div>
  );
};

export default Edit;

