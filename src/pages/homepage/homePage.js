import React from "react";
import Logo from "./Logo";
import RobotDisplay from "../heroComponent/RobotDisplay"; 
import AboutUs from "./AboutUs";
import TryButton from "./TryButton";
import ProductSection from "./ViewProductButton";
import ContactUs from "./ContactUs";

function HomePage() {
  return (
    <div className="px-4 pt-0.5 pb-32 w-full bg-white max-md:pb-24 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[73%] max-md:w-full max-md:mb-5">
          <div className="flex flex-col max-md:mt-6 max-md:max-w-full">
            <Logo />
            <RobotDisplay /> 
          </div>
        </div>
        <div className="flex flex-col w-[27%] max-md:w-full">
          <div className="flex flex-col mt-9 w-full text-white max-md:mt-10">
            <TryButton />
            <AboutUs />
            <ProductSection />
            <ContactUs />
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default HomePage;
