import React from 'react';


const OrderInfo = ({ product, quantity }) => {
  const totalPrice = product.price * quantity;


  return (
    <div className="order-info">
      <h2>Order Summary</h2>
      <p>Product: {product.name}</p>
      <p>Price per item: ${product.price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};


export default OrderInfo;
