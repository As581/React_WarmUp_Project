import React, { useState, useContext } from "react";
import { nanoid } from "nanoid";
import { productContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import "./Create.css"; // CSS import

const ProductForm = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(productContext);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!title || title.trim().length < 4) {
      alert("Title must be at least 4 characters.");
      return;
    }
    if (!image || !image.startsWith("http")) {
      alert("Please provide a valid image URL.");
      return;
    }
    if (!price || isNaN(price) || Number(price) <= 0) {
      alert("Price must be a valid positive number.");
      return;
    }
    if (!category || category.trim().length < 3) {
      alert("Category must be at least 3 characters.");
      return;
    }
    if (!description || description.trim().length < 10) {
      alert("Description must be at least 10 characters.");
      return;
    }

    // Creating product object
    const productData = {
      id: nanoid(),
      title: title.trim(),
      image: image.trim(),
      price: parseFloat(price), // Convert price to a number
      category: category.trim(),
      description: description.trim(),
    };

    // Updating products
    const updatedProducts = [...products, productData];
    setProducts(updatedProducts);

    // Save to localStorage
    localStorage.setItem("products", JSON.stringify([...products,productData]));

    // Navigate to home
    navigate("/");
  };

  return (
    <div className="form-container-2">
      <h2>Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            required
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input
            type="url"
            name="Image Url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Create Products
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
