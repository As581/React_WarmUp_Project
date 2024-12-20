/*import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { productContext } from '../utils/Context';
//import axios from '../utils/Axios';
import './Home.css';
import Loading from './Loading';

function Home() {
  const [products] = useContext(productContext);
  const { search } = useLocation();
  
  const category = search ? decodeURIComponent(search.split('=')[1]) : null;

  const [filterProducts, setFilterProducts] = useState(products || []);

  const getSingleCategoryProducts = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilterProducts(data);
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
  };

  useEffect(() => {
    if (!category || category === "undefined") {
      setFilterProducts(products);
    } else {
     // getSingleCategoryProducts();
     filterProducts(products.filter((p)=>p.category === category));
    }
  }, [category, products]);

  return products ? (
    <div className="main-2">
      <div className="cards">
        {filterProducts?.map((product) => (
          <Link to={`/details/${product.id}`} key={product.id} className="card">
            <div className="card-image">
              <img src={product.image} alt={product.title} className="image" />
            </div>
            <div className="card-content">
              <p className="description">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Home;*/

import React, { useContext, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { productContext } from '../utils/Context';
//import axios from '../utils/Axios';
import './Home.css';
import Nav from './Nav.jsx'
import Loading from './Loading';

function Home() {
  const [products] = useContext(productContext);
  const { search } = useLocation();
  
  const category = search ? decodeURIComponent(search.split('=')[1]) : null;

  const [filterProducts, setFilterProducts] = useState(products || []);

  const getSingleCategoryProducts = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setFilterProducts(data);
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
  };
  
useEffect(() => {
    if (!category || category === "undefined") {
      setFilterProducts(products);
    } else {
      const filtered = products.filter((p) => p.category === category);
      setFilterProducts(filtered);
    }
  }, [category, products]);
  
  return products ? (
    <div className="main-2">
       <Nav />
      <div className="cards">
        {filterProducts?.map((product) => (
          <Link to={`/details/${product.id}`} key={product.id} className="card">
            <div className="card-image">
              <img src={product.image} alt={product.title} className="image" />
            </div>
            <div className="card-content">
              <p className="description">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
}

export default Home;



