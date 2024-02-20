import React, { useEffect, useState } from 'react';

const ProductFilter = () => {
   const [items, setItems] = useState([]);
   const [filteredItems, setFilteredItems] = useState([]);

   useEffect(() => {
      fetch('https://fakestoreapi.com/products')
         .then(response => response.json())
         .then(data => {
            setItems(data);
            setFilteredItems(data); // Initially set filtered items to all items
         });
   }, []);

   const applyFilter = (category) => {
      const filteredItems = items.filter(item => item.category === category);
      setFilteredItems(filteredItems);
   }

   return (
    <div className="container">
    <h1>ADD PRODUCTS</h1>
    
    <button type="button" className="btn btn-primary btn1 mx-1" onClick={() => applyFilter('electronics')}>Electronics</button>
<button type="button" className="btn btn-secondary btn1 mx-1" onClick={() => applyFilter("men's clothing")}>Men's Clothing</button>
<button type="button" className="btn btn-success btn1 mx-1" onClick={() => applyFilter('jewelery')}>Jewelery</button>
<button type="button" className="btn btn-danger btn1 mx-1" onClick={() => applyFilter("women's clothing")}>Women's Clothing</button>
  

    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
       {filteredItems.map((item, index) => (
          <div key={index} className="col mb-4"  data-aos="fade-up-right">
             <div className="card h-100">
                <img src={item.image} className="card-img-top img-fluid" alt={item.title} />
                <div className="card-body" >
                   <h5 className="card-title">{item.title.substring(0, 17)}</h5>
                   <p className="card-text">{item.category}</p>
                   <p className="card-text">${item.price}</p>
                </div>
             </div>
          </div>
       ))}
    </div>
 </div>
   );
}

export default ProductFilter;
