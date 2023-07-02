import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MenuPage = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Item 1',
      description: 'Description of Item 1',
      price: '$10.99',
      image: 'item1.jpg',
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description of Item 2',
      price: '$8.99',
      image: 'item2.jpg',
    },
    // Add more menu items as needed
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleOrder = (item) => {
    if (selectedItem === null) {
      // Handle order logic here
      console.log('Order placed for:', item.title);
      setSelectedItem(item);
    } else {
      console.log('You can only order one item at a time');
    }
  };

  return (
    <div className="container">
      <h1>Menu</h1>
      <div className="row">
        {menuItems.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className={`card ${selectedItem && selectedItem.id === item.id ? 'border-primary' : ''}`}>
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.price}</p>
                <button className="btn btn-primary" onClick={() => handleOrder(item)}>Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;