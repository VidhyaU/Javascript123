import React, { useState, useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
 
export default function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);
 
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
 
  // Filter the products based on the search input
  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });
 
  return (
    <>
      <div className='container mt-3'>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search by product title"
          value={search}
          onChange={handleSearchChange}
        />
        <div className='row'>
          {filteredProducts.map((product) => (
            <div className='col-md-4 mb-4' key={product.id}>
              <div className='card h-100'>
                <img src={product.image} className='card-img-top' alt={product.title} style={{ width: '100px', height: 'auto', margin: 'auto', padding: '10px' }} />
                <div className='card-body text-center'>
                  <h5 className='card-title'>{product.title}</h5>
                  <p className='card-text'>Price: ${product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}