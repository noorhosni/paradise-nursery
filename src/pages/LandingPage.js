// src/pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
      }}
    >
      <div className="text-center text-white px-4">
        <h1 className="text-6xl font-bold mb-6">Paradise Nursery</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Paradise Nursery offers a variety of indoor plants to bring nature into your home. 
          From succulents to flowering plants, we help you create your own indoor paradise.
        </p>
        <Link 
          to="/products"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;