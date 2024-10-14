import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Itinerary from './pages/Itinerary';
import TropicalParadise from './pages/TropicalParadise';
import MountainTrekking from './pages/MountainTrekking';
import AfricanSafari from './pages/AfricanSafari';
import EuropeanCityHopping from './pages/EuropeanCityHopping';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import Reviews from './pages/Reviews';
import Team from './pages/Team';

function App() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/itinerary/tropical-paradise" element={<TropicalParadise />} />
          <Route path="/itinerary/mountain-trekking" element={<MountainTrekking />} />
          <Route path="/itinerary/african-safari" element={<AfricanSafari />} />
          <Route path="/itinerary/european-city-hopping" element={<EuropeanCityHopping />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;