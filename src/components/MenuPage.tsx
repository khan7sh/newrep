import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MenuPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center text-burgundy hover:text-green transition-colors mb-8">
          <ArrowLeft className="mr-2" size={24} />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-burgundy mb-8">Our Menu</h1>
        
        <div className="space-y-8">
          <img src="/menu-drinks-desserts.jpg" alt="Drinks and Desserts Menu" className="w-full rounded-lg shadow-lg" />
          <img src="/menu-breakfast-lunch-bites.jpg" alt="Breakfast, Lunch, and Bites Menu" className="w-full rounded-lg shadow-lg" />
          <img src="/menu-starters-mains.jpg" alt="Starters and Mains Menu" className="w-full rounded-lg shadow-lg" />
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700 mb-4">
            Please note: A 10% service charge is automatically added to your bill.
          </p>
          <p className="text-lg text-gray-700">
            (Vg) - Vegan | (V) - Vegetarian | * - Gluten Free
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;