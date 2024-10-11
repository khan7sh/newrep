import React from 'react'
import { Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'

const MenuItem: React.FC<{ title: string; description: string; price: string; imageUrl: string }> = ({ title, description, price, imageUrl }) => (
  <div className="card menu-item" data-aos="fade-up">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
    <div className="card-body">
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <span className="text-burgundy font-semibold">{price}</span>
    </div>
  </div>
)

const Menu: React.FC = () => {
  return (
    <section id="menu" className="bg-cream py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12" data-aos="fade-up">
          Menu Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <MenuItem 
            title="Bolani"
            description="Stuffed flatbread with potato and leeks"
            price="£5.99"
            imageUrl="https://images.unsplash.com/photo-1630409351217-bc4fa6422075?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <MenuItem 
            title="Kabuli Palao"
            description="Afghanistan's national dish - rice with lamb, raisins, and carrots"
            price="£14.99"
            imageUrl="https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
          <MenuItem 
            title="Afghan Shakshuka"
            description="Eggs poached in a sauce of tomatoes, olive oil, and spices"
            price="£9.99"
            imageUrl="https://images.unsplash.com/photo-1590412200988-a436970781fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          />
        </div>
        <div className="text-center">
          <p className="text-base text-gray-600 mb-6" data-aos="fade-up">Discover our full menu featuring a wide range of authentic Afghan dishes.</p>
          <Link to="/menu" className="btn btn-primary inline-flex items-center justify-center" data-aos="fade-up">
            <Utensils className="mr-2" size={18} />
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Menu