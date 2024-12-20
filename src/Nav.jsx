/*import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { productContext } from '../utils/Context';

function Nav() {
  const [products] = useContext(productContext);

  const allCategories = products?.map(product => product.category) || [];
  const distinctCategories = [...new Set(allCategories)];

  return (
    <nav className="left-nav">
      <Link to="/Create" className="add-product-link">Add To Products</Link>
      <hr className="hr" />
      <h1>Category Filter</h1>
      <div className="category-2">
        {distinctCategories.map(category => (
          <Link className="link" key={category} to={`/?category=${category}`}>
            <span className="dot"></span>
            {category}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
*/
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { productContext } from '../utils/Context';

function Nav() {
  const [products] = useContext(productContext);

  // Extract all categories and remove duplicates
  const distinctCategories = products
    ? [...new Set(products.map((product) => product.category))]
    : [];

  return (
    <nav className="left-nav">
      {/* Add Product Link */}
      <Link to="/Create" className="add-product-link">
        Add To Products
      </Link>

      <hr className="hr" />

      {/* Category Filter Section */}
      <h1>Category Filter</h1>
      <div className="category-2">
        {distinctCategories.length > 0 ? (
          distinctCategories.map((category) => (
            <Link className="link" key={category} to={`/?category=${category}`}>
              <span className="dot"></span>
              {category}
            </Link>
          ))
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </nav>
  );
}

export default Nav;




