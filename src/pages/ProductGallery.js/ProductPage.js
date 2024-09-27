import React, { useState } from 'react';
import Navbar from "../homepage/Navbar";
import Footer from '../homepage/Footer';

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const products = [
    {
      id: 1,
      image: 'https://cdn.builder.io/api/v1/image/assets/TEMP/51fb457e483d73e95e2465c37aa16b44c374e3d1045b0a6cc188edceeacc3b91?placeholderIfAbsent=true&apiKey=29ef8dbb4e274cc58b5055e8cc61d6af',
      name: 'BMO',
      bgColor: 'bg-[#63BDA4]',
      link: '/product1',
    },
    {
      id: 2,
      image: 'models/baymax.png',
      name: 'Baymax',
      bgColor: 'bg-gray-200',
      link: '/product2',
    },
    {
      id: 3,
      image: 'models/51fb457e483d73eeacc3b91.png',
      name: 'Vector Robot',
      bgColor: 'bg-black',
      link: '/product3',
    },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Navbar ></Navbar>

    <div className="flex flex-col pt-10 max-w-[1200px] mx-auto">
      <h1 className="text-5xl font-bold text-center mb-8 mt-1">Our Products</h1>
  
      <div className="flex justify-center mb-16">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full max-w-[400px] px-4 py-2 text-xl border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mb-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`flex flex-col items-center px-3.5 pb-5 w-full rounded-2xl ${product.bgColor} transition-transform transform hover:scale-105 hover:shadow-lg`}
          >
            <img
              loading="lazy"
              src={product.image}
              className="object-contain z-10 mt-[-64px] w-full aspect-[0.62] max-w-[290px]"
              alt={product.name}
            />
            <div className="text-white text-xl font-extrabold">{product.name}</div>
            <a
              href={product.link}
              className="self-stretch px-16 pt-4 pb-3 mt-7 text-white whitespace-nowrap bg-black rounded-3xl text-center font-bold text-xl transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
            >
              VIEW
            </a>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};  

export default ProductPage;
