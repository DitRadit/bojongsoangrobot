import React from "react";
import Logo from "./Logo";
import RobotDisplay from "../heroComponent/RobotDisplay"; 
import AboutUs from "./AboutUs";
import TryButton from "./TryButton";
import ProductSection from "./ViewProductButton";
import ContactUs from "./ContactUs";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import HomeModelContainer from "../3DModel/HomeModelContainer";

function HomePage() {
  return (
    <div className="px-4 pt-0.5 pb-32 w-full bg-white max-md:pb-24 max-md:max-w-full">
       <Navbar />
      <div className="flex gap-5 max-md:flex-col">
        
        <div className="flex flex-col w-[73%] max-md:w-full max-md:mb-5">
       
          <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
            
            <RobotDisplay /> 
          </div>
        </div>
        <div className="flex flex-col w-[27%] max-md:w-full">
          <div className="flex flex-col mt-2 w-full text-white max-md:mt-10">
            <TryButton />
            <Link to="/aboutus">
              <AboutUs />
            </Link>
            <Link to="/product">
            <ProductSection />
            </Link>
            <Link to="/contact">
            <ContactUs />
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default HomePage;
