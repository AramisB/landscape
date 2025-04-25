'use client';

import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

// Mock data - Replace with API call
const mockProducts: Product[] = [
  {
    _id: '1',
    name: 'iPhone 14 Pro',
    description: 'The latest iPhone with A16 Bionic chip and 48MP camera',
    price: 999,
    image: '/images/iphone-14-pro.jpg',
    category: 'phones',
    stock: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: '2',
    name: 'MacBook Pro M2',
    description: 'Powerful laptop with M2 chip and Retina display',
    price: 1999,
    image: '/images/macbook-pro.jpg',
    category: 'laptops',
    stock: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Add more mock products here
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProducts = selectedCategory === 'all'
    ? mockProducts
    : mockProducts.filter(product => product.category === selectedCategory);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Deturo Tech</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => setSelectedCategory('phones')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'phones'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Phones
          </button>
          <button
            onClick={() => setSelectedCategory('laptops')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'laptops'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Laptops
          </button>
          <button
            onClick={() => setSelectedCategory('gadgets')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === 'gadgets'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            Gadgets
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
} 