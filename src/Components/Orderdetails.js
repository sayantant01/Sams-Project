import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CheckoutPage = () => {
  const orderDetails = {
    reservationId: '123456',
    subtotal: '$50.00',
    paymentStatus: 'Paid',
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Order Details</h5>
          <p className="card-text">Reservation ID: {orderDetails.reservationId}</p>
          <p className="card-text">Subtotal: {orderDetails.subtotal}</p>
          <p className="card-text">Payment Status: {orderDetails.paymentStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;