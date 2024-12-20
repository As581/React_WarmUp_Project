/*import React, { useState, useEffect ,useContext} from 'react';
import axios from '../utils/Axios';
import { Link, useParams } from 'react-router-dom';
import { productContext } from '../utils/Context';

import './Details.css';

function Details() {
  const [products,setProducts] = useContext(productContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams(); 

  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`); 
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
      if(!product){
            setProduct(products.filter((p)=>p.id === id)[0])
      }
    //getSingleProduct(); 
  }, [id]);


  if (!product) {
    return (
      <div className="product-detail">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.title} className="image" />
      </div>

      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="category">Category: {product.category}</p>
        <p className="price">Price: ₹{product.price}</p>
        <p className="description">Description: {product.description}</p>

        <div className="buttons">
          <Link to={`/edit-product/${id}`} className="edit-btn">
            Edit
          </Link>
          <button className="delete-btn" onClick={() => console.log(`Delete ${id}`)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;*/

import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { productContext } from '../utils/Context';
import './Details.css';

function Details() {
  const [products] = useContext(productContext); // Context se products fetch karenge
  const [product, setProduct] = useState(null); // Ek product store karne ke liye state
  const { id } = useParams(); // URL se product ID fetch karenge
  const navigate = useNavigate(); // Navigation ke liye use hota hai

  useEffect(() => {
    if (products && products.length > 0) {
      // Context ke products me se match karta hua product dhoondhein
      const foundProduct = products.find((p) => String(p.id) === String(id));
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.error(`Product with ID ${id} not found!`);
        navigate('/'); // Product na mile to user ko home page pe bhej dena
      }
    }
  }, [id, products, navigate]);
  
  const deleteProductHandler = (id) => {
  console.log("Deleting product with ID:", id);
  const filteredProducts = products.filter((p) => p.id !== id);
  console.log("Filtered products:", filteredProducts);
  setProduct(filteredProducts);
  localStorage.setItem("products", JSON.stringify(filteredProducts));
     navigate('/');
};

  
  

  if (!product) {
    return (
      <div className="product-detail">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.title} className="image" />
      </div>

      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="category">Category: {product.category}</p>
        <p className="price">Price: ₹{product.price}</p>
        <p className="description">Description: {product.description}</p>

        <div className="buttons">
          <button className="edit-btn">
           <Link to={`/Edit/${product.id}`}>Edit Product</Link>
          </button>

          <button
              className="delete-btn"
              onClick={() => deleteProductHandler(product.id)}
            >
              Delete
            </button>

        </div>
      </div>
    </div>
  );
}

export default Details;







