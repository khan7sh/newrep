import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import BookingPage from './components/BookingPage'
import KenzaCoffeePage from './components/KenzaCoffeePage'
import AboutUsPage from './components/AboutUsPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import MenuPage from './components/MenuPage'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          } />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/kenza-coffee" element={<KenzaCoffeePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App