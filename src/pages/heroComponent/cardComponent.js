import React from 'react';

const Card = ({ icon }) => {
  return (
    <div className="bg-white border-2 border-gray-200 shadow-lg rounded-lg p-6 flex items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <img src={icon} alt="Icon" className="w-16 h-16" />
    </div>
  );
};

const CardCard = () => {
  const icons = [
    "models/Html 5.png",
    "models/CSS3.png",
    "models/JavaScript.png",
    "models/React.png",
    "models/tailwind.png",
    "models/Virtual Reality.png",
  ];

  return (
    <div className="bg-gray-100 p-10">
      <h1 className="text-2xl font-bold text-center mb-8">Technology that we used</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {icons.map((icon, index) => (
          <Card key={index} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default CardCard;
