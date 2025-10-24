// src/pages/ProductsPage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../store/cartSlice';
import { plantsData, categories } from '../data/plantsData';
import Header from '../components/Header';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories and add 'All' option
  const allCategories = ['All', ...categories];

  // Filter plants by selected category
  const filteredPlants = selectedCategory === 'All' 
    ? plantsData 
    : plantsData.filter(plant => plant.category === selectedCategory);

  const handleAddToCart = (plant) => {
    dispatch(addItemToCart(plant));
  };

  const isInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Plants</h1>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-white rounded-lg p-2 shadow-md">
            {allCategories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map(plant => (
            <div key={plant.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="text-6xl text-center mb-4">{plant.image}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{plant.name}</h3>
                <p className="text-gray-600 mb-2">{plant.description}</p>
                <p className="text-green-700 font-bold mb-2">${plant.price}</p>
                <p className="text-sm text-gray-500 mb-4">Category: {plant.category}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                  className={`w-full py-2 px-4 rounded-md font-semibold transition-colors ${
                    isInCart(plant.id)
                      ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 text-white'
                  }`}
                >
                  {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;