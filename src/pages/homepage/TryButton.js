import React from 'react';
import { Link } from 'react-router-dom';

function TryButton() {
  return (
    <Link to="/product">
    <button className="px-16 py-3.5 mt-1.5 w-full bg-black border-2 border-gray-700 rounded-3xl text-3xl font-bold text-white transition-transform duration-300 hover:bg-white hover:text-black hover:scale-105">
      TRY
    </button>
  </Link>
  );
}

export default TryButton;
