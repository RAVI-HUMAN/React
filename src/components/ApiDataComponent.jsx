// src/ApiDataComponent.js

import React, { useState, useEffect } from 'react';
import './ApiDataComponent.css'; // Import the CSS file for styling

function ApiDataComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="card-container">
      {data && data.map(item => (
        <div className="card" key={item.id}>
          {/* For simplicity, using a placeholder image */}
          <img src={item.images} alt="Placeholder" className="card-image" />
          <div className="card-details">
            <h2>{item.title}</h2>
            <h2>{item.price}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApiDataComponent;
