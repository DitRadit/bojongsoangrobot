import React from 'react';
import Navbar from '../homepage/Navbar';
import HomeModelContainer from '../Product1/ModelContainer';
import bimo from "../../images/bmomain.png";
import bimo1 from "../../images/bmo2.png";
import bimo2 from "../../images/bmo model.png";
import Footer from '../homepage/Footer';

const Product1 = () => {
    return (
        <>
        <div>
            <Navbar />
            <div className="flex flex-col space-y-8">
<div className="flex flex-col lg:flex-row items-center justify-center bg-[#63BDA4] py-8 sm:py-12 lg:py-20 gap-8 sm:gap-12 lg:gap-16">
  <div className="text-white w-full lg:w-1/2 space-y-4 px-4 sm:px-6 lg:px-0">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">BMO</h1>
    <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
  <div className="w-auto lg:w-auto">
    <img src={bimo} alt="Bimo Product" className="w-full h-[100vh] sm:h-auto max-h-[400px] sm:max-h-[500px] lg:max-h-[686px]" />
  </div>
</div>

      <div className="flex flex-col items-center space-y-8 px-4 py-5 lg:px-16 py-5">
        <div className="text-center space-y-2">
          <h1 className="text-3xl lg:text-4xl font-bold">Adventure Time</h1>
          <p className="text-lg lg:text-2xl text-gray-600">BMO</p>
        </div>

        <div className=" flex flex-col lg:flex-row items-center gap-8">
          <div className=" border-l-2 border-black pl-4 space-y-2">
            <h1 className="text-xl text-gray-600">
              <span className="font-bold text-black">Name:</span> BMO
            </h1>
            <h1 className="text-xl text-gray-600">
              <span className="font-bold text-black">Width:</span> 25 cm
            </h1>
            <h1 className="text-xl text-gray-600">
              <span className="font-bold text-black">Height:</span> 1 m
            </h1>
          </div>
          <div className="bimo-session-image bg-[#63BDA4] flex items-center justify-center w-64 h-64 rounded-3xl">
            <img src={bimo1} alt="Bimo Product" className="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="bimo-session-potition flex flex-col items-center space-y-8 px-4 lg:px-16 py-5">
        <div className="bimo-session-potition-image border border-gray-400 p-4 rounded-3xl">
          <img src={bimo2} alt="Bimo Product" className="w-full h-auto" />
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
            <HomeModelContainer />
        </div>
        <Footer />
        </>
    );
};

export default Product1;
