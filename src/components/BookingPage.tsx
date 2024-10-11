import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import BookingForm from './BookingForm';

const BookingPage: React.FC = () => {
  const [selectedSeating, setSelectedSeating] = useState<'table' | 'floor' | null>(null);

  return (
    <div className="min-h-screen bg-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center text-burgundy hover:text-green transition-colors mb-8">
          <ArrowLeft className="mr-2" size={24} />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-burgundy mb-8">Book a Table</h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-burgundy mb-4">Select Seating Type</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setSelectedSeating('table')}
              className={`flex-1 py-3 px-6 rounded-lg text-lg font-semibold transition-colors ${
                selectedSeating === 'table'
                  ? 'bg-burgundy text-cream'
                  : 'bg-cream text-burgundy border-2 border-burgundy hover:bg-burgundy hover:text-cream'
              }`}
            >
              Table Seating
            </button>
            <button
              onClick={() => setSelectedSeating('floor')}
              className={`flex-1 py-3 px-6 rounded-lg text-lg font-semibold transition-colors ${
                selectedSeating === 'floor'
                  ? 'bg-burgundy text-cream'
                  : 'bg-cream text-burgundy border-2 border-burgundy hover:bg-burgundy hover:text-cream'
              }`}
            >
              Floor Seating
            </button>
          </div>
        </div>
        
        {selectedSeating && (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <BookingForm seatingType={selectedSeating} />
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingPage;