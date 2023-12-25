// src/Header.js

import React from 'react';
import './Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <header className="app-header">
      <div className="logo-container">
        <img src="/path-to-your-logo.png" alt="Logo" className="app-logo" />
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li><a href="/products">Products</a></li>
          <li><a href="/subcategories">categories</a></li>
          <li><a href="/add">AddToCart</a></li>
          <li><a href="/login">Login/Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
