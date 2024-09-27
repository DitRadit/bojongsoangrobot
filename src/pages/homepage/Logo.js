import React from "react";
import logoImage from "../../images/WhatsApp_Image_2024-09-27_at_15.07.10-removebg-preview.png"; // Update this path to your logo image
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
    <div className="self-start">
      <img src={logoImage} alt="Logo" className="h-10 w-auto" /> {/* Adjust height as needed */}
    </div>
    </Link>
  );
}

export default Logo;
