import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Coffee, Utensils, Globe } from 'lucide-react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-burgundy hover:text-green transition-colors mb-8">
          <ArrowLeft className="mr-2" size={24} />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-burgundy mb-12" data-aos="fade-up">About Us</h1>
        
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-burgundy mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Noshe Cambridge was born from a passion for sharing authentic Afghan flavors and hospitality. Founded in 2024, we set out to create a space where traditional recipes meet modern culinary techniques, all while honoring our Afghan heritage.
          </p>
          <p className="text-gray-700">
            Our name, "Noshe" (نوش), means "sweet" or "delicious" in Dari, reflecting our commitment to providing a delightful dining experience that captures the essence of Afghan cuisine.
          </p>
        </section>
        
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-burgundy mb-4 flex items-center">
            <Coffee className="mr-2" size={24} />
            Kenza Coffee
          </h2>
          <p className="text-gray-700">
            At the heart of Noshe Cambridge is our house-roasted Kenza Coffee. We carefully source beans from Afghanistan and neighboring regions, roasting them in small batches to ensure the highest quality and freshness. Kenza Coffee embodies our dedication to craftsmanship and our desire to share a piece of Afghan culture through every cup.
          </p>
        </section>
        
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-2xl font-bold text-burgundy mb-4 flex items-center">
            <Utensils className="mr-2" size={24} />
            Noshe Cuisine
          </h2>
          <p className="text-gray-700">
            Our menu is a celebration of Afghan flavors, featuring both traditional dishes and innovative creations. We use locally sourced ingredients whenever possible, blending them with authentic Afghan spices and cooking techniques. From our aromatic rice dishes to our freshly baked naan, every item on our menu is crafted with care and respect for Afghan culinary traditions.
          </p>
        </section>
        
        <section data-aos="fade-up">
          <h2 className="text-2xl font-bold text-burgundy mb-4 flex items-center">
            <Globe className="mr-2" size={24} />
            Afghanistan: A Rich Culinary Heritage
          </h2>
          <p className="text-gray-700">
            Afghanistan's cuisine is as diverse as its landscape, influenced by its position at the crossroads of ancient trade routes. The country's culinary traditions reflect a rich tapestry of flavors, combining elements from Central Asian, Middle Eastern, and South Asian cuisines. At Noshe Cambridge, we're proud to share this vibrant culinary heritage with our community in Cambridge.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;