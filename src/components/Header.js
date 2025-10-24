// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Paradise Nursery</Link>
        
        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-green-200 transition-colors">Products</Link>
          <Link to="/cart" className="flex items-center hover:text-green-200 transition-colors">
            <span className="mr-1">🛒</span>
            Cart ({totalQuantity})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;