import React from 'react'

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1534939561126-855b8675edd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center h-screen flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-aos="fade-up">
          <span className="text-beige">Welcome to</span>{' '}
          <span className="text-beige">Noshe Cambridge</span>
        </h1>
        <div className="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <p className="text-xl md:text-2xl mb-8 font-light text-cream">
            Discover the perfect blend of artisanal coffee house and Afghan restaurant
          </p>
        </div>
        <div className="flex justify-center mb-8" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-burgundy bg-opacity-80 p-6 rounded-lg">
            <table className="text-cream">
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b border-cream">Tuesday - Sunday</td>
                  <td className="px-4 py-2 border-b border-cream">8:00 AM - 10:00 PM</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Monday</td>
                  <td className="px-4 py-2">Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4" data-aos="fade-up" data-aos-delay="400">
          <button onClick={scrollToBooking} className="btn btn-primary w-full sm:w-auto">Book a Table</button>
          <a href="https://noshe-orders.pharmix.co.uk/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary w-full sm:w-auto">Order Online</a>
        </div>
      </div>
    </section>
  )
}

export default Hero