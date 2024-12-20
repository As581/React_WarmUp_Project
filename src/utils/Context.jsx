/*import React, { createContext, useState, useEffect } from 'react';
//import axios from './Axios';

export const productContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(JSON.parse(localStorage("products")),[]);

  const getProducts = async () => {
    try {
      const { data } = await axios.get('/products');
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  

  return (
    <productContext.Provider value={[products, setProducts]}>
      {children}
    </productContext.Provider>
  );
};

export default ContextProvider;
*/
import React, { createContext, useState, useEffect } from 'react';
import axios from './Axios';

export const productContext = createContext();

const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    // Local storage se products ko parse karke retrieve karte hain
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : []; // Agar data na ho to empty array return karein
  });

  /*const getProducts = async () => {
    try {
       const { data } = await axios.get('/products'); // Uncomment if using axios
     // const data = []; // Placeholder: API se data lene ka mock
      setProducts(data);
      localStorage.setItem("products", JSON.stringify(data)); // Local storage me data save karte hain
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts(); // Component mount hone par products fetch karte hain
  }, []);
  */

  return (
    <productContext.Provider value={[products, setProducts]}>
      {children}
    </productContext.Provider>
  );
};

export default ContextProvider;
