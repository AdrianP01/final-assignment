import React from 'react';
import { useState } from 'react';


const ProductForm = ({ products, onOrderChange }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);


  const handleProductChange = (e) => {
    setSelectedProductIndex(e.target.value);
  };


  const handleQuantityChange = (amount) => {
    setQuantity(prevQuantity => Math.max(prevQuantity + amount, 0));
  };


  const selectedProduct = products[selectedProductIndex];


  React.useEffect(() => {
    onOrderChange(selectedProduct, quantity);
  }, [selectedProduct, quantity, onOrderChange]);


  return (
    <div className="product-form">
      <label>Product:</label>
      <select value={selectedProductIndex} onChange={handleProductChange}>
        {products.map((product, index) => (
          <option key={index} value={index}>
            {product.name} - ${product.price}
          </option>
        ))}
      </select>


      <label>Quantity:</label>
      <button onClick={() => handleQuantityChange(-1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => handleQuantityChange(1)}>+</button>
    </div>
  );
};


export default ProductForm;
