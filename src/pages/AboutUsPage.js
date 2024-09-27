import React from 'react';
import Navbar from './homepage/Navbar';
import img1 from '../images/swwwwwwwwwww.png';
import img2 from '../images/6f9d96c1-fbc9-4589-a39d-2e45aa7cc7df-removebg-preview.png';
import img3 from '../images/aakakkaa.png';
import CardCard from './heroComponent/cardComponent';
import Footer from './homepage/Footer';

const AboutUs = () => {
    return (
        <>
        <div>
            <Navbar />
            <div className="bg-black text-white flex justify-center text-center py-32 px-6">
                <div className="w-full max-w-2xl flex flex-col justify-start space-y-8">  {/* Changed justify-center to justify-start */}
                    <h1 className="text-4xl md:text-5xl font-bold px-4">About Us</h1>
                    <p className="text-lg md:text-xl px-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi eius porro perspiciatis possimus
                        voluptas quisquam ipsa doloribus doloremque totam officiis? Non adipisci obcaecati mollitia iusto
                        voluptatem rerum deleniti. Magni, quidem!
                    </p>
                </div>
            </div>

            <CardCard />
            <div className="text-center py-10">
                <h1 className="text-3xl font-bold">OUR TEAM</h1>
            </div>
            <div className="flex flex-wrap justify-center gap-6 px-6 pb-2">
  <div className="w-80 rounded-2xl p-6 space-y-4 border-2 border-gray-300">
    <img src={img1} alt="NAKULLA" className="w-full h-80 object-cover rounded-lg" />
    <div className="text-center">
      <h1 className="text-xl font-bold">NAKULLA</h1>
    </div>
  </div>

  <div className="w-80 rounded-2xl p-6 space-y-4 border-2 border-gray-300">
    <img src={img2} alt="GUS RADIT" className="w-full h-80 object-cover rounded-lg" />
    <div className="text-center">
      <h1 className="text-xl font-bold">GUS RADIT</h1>
    </div>
  </div>

  <div className="w-80 rounded-2xl p-6 space-y-4 border-2 border-gray-300">
    <img src={img3} alt="NABIL" className="w-full h-80 object-cover rounded-lg" />
    <div className="text-center">
      <h1 className="text-xl font-bold">NABIL</h1>
    </div>
  </div>
</div>

        </div>
        <Footer />
        </>
    );
};

export default AboutUs;
