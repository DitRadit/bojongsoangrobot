import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homePage';
import AboutUs from './pages/AboutUsPage';
import ContactUs from './pages/ContactUsPage';
import Product1 from './pages/product/product1';
import Product2 from './pages/product/product2';
import Product3 from './pages/product/product3';
import ProductPage from './pages/ProductGallery.js/ProductPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/product1" element={<Product1 />} />
      <Route path="/product2" element={<Product2 />} />
      <Route path="/product3" element={<Product3 />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
};

export default App;
