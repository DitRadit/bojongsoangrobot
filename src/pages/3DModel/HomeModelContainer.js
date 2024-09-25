import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import HomeHitModel from "./HomeHitModel";
import React from "react";

const HomeModelContainer = () => {
  return (
    <> <div className="flex justify-center mt-10">
    <ARButton
      sessionInit={{
        requiredFeatures: ["hit-test"],
      }}
      className="flex flex-col w-full max-w-[706px] py-px bg-teal-400 shadow-sm rounded-[86px] px-5"
      style={{ border: "none", cursor: "pointer" }}
    >
      <div className="flex gap-5 items-center max-md:flex-col">
        {/* Left Image Section */}
        <div className="w-[56%] max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a09f6ef16f43fe62ba62488924699c5c625796db88227fcf20a6d3cd3ba6e13d?placeholderIfAbsent=true&apiKey=29ef8dbb4e274cc58b5055e8cc61d6af"
            alt="See AR in action"
            className="object-contain w-full -mt-14 aspect-[1.28] max-md:mt-0"
          />
        </div>
        {/* Right Text Section */}
        <div className="flex flex-col w-[44%] max-md:w-full">
          <h2 className="mt-16 text-4xl font-bold text-center text-white">
            See AR <br /> in Action!
          </h2>
        </div>
      </div>
    </ARButton>
  </div>


      <Canvas
        camera={{ position: [0, 0, 5] }}
        gl={{ alpha: true }} // Ensure transparency for AR
      >
        <XR>
          <ambientLight intensity={0.5} />
          <HomeHitModel />
        </XR>
      </Canvas>
    </>
  );
};

export default HomeModelContainer;
