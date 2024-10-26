import React, { useState } from 'react';
import Header from './Components/Header';
import ProductForm from './Components/ProductForm';
import OrderInfo from './Components/OrderInfo';
import './App.css';
import logo from './images/LogoComponentApp.png';


const App = () => {
  const products = [
    { name: 'Applejuice', price: 1.00 },
    { name: 'Cereal', price: 2.50 },
    { name: 'Milk', price: 1.50 },
  ];


  const [order, setOrder] = useState({ product: products[0], quantity: 1 });


  const handleOrderChange = (product, quantity) => {
    setOrder({ product, quantity });
  };


  return (
    <div className="app">
      <Header image={logo} title="Supermarket Order" />
      <ProductForm products={products} onOrderChange={handleOrderChange} />
      <OrderInfo product={order.product} quantity={order.quantity} />
    </div>
  );
};


export default App;
