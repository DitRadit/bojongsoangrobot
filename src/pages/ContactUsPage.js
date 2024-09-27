import React from "react";
import "../css/contact_us.css";
import Navbar from "./homepage/Navbar";
import email from "../images/Email.png"
import instagram from "../images/Instagram.png"
import phone from "../images/Phone.png"
import Footer from "./homepage/Footer";

const ContactUs = () => {
  return (
    <>
    <div className="m-3">
    <Navbar ></Navbar>
    </div>
    <div>
      <div className="titleWrapper">
        <h1 className="contactTitle">Contact Us</h1>
      </div>
      <div className="topWrapper">
        <div className="inputWrapper">
          <label htmlFor="name">NAME:</label><br />
          <input type="text" placeholder="Enter your name" className="name" /><br />
          <label htmlFor="email">EMAIL:</label><br />
          <input type="email" placeholder="Enter your email" className="email" /><br />
          <label htmlFor="message">MESSAGE:</label><br />
          <input type="text" placeholder="Enter your message" className="message" /><br />
          <button>SEND</button>
        </div>
        <div className="mediaWrapper">
          <div className="mediaList">
            <img src={email} alt="email" />
            <p>bojongrobot@gmail.com</p>
          </div>
          <div className="mediaList">
            <img src={instagram}  alt="Instagram" />
            <p>@bojongrobot</p>
          </div>
          <div className="mediaList">
            <img src={phone}  alt="phone" />
            <p>+62 XXX-XXXX-XXXX</p>
          </div>
        </div>
      </div>
      <div className="bottomWrapper">
        <div className="locationTitle">
          <h1>FIND US</h1>
        </div>
        <div className="locationWrapper">
          <div className="locationMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.307454349276!2d107.62911047483591!3d-6.97300699302767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sTelkom%20University!5e0!3m2!1sen!2sid!4v1727078452754!5m2!1sen!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
          <div className="locationTextbox">
            <p>
              Jl. Telekomunikasi. 1, Terusan Buahbatu - Bojongsoang, Telkom University,
              Sukapura, Kec. Dayeuhkolot, Kabupaten Bandung, Jawa Barat 40257
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ContactUs;
