import React from "react";
import { TypeAnimation } from "react-type-animation";

function BannerSubtitle() {
  return (
    <h2 className="text-xl md:text-2xl font-semibold">
      <TypeAnimation
        sequence={[
          "Frontend Developer", // pehle ye text aayega
          2000, // 2 second rukega
          "React Developer",
          2000,
          "MERN Enthusiast",
          2000,
        ]}
        speed={50} // typing speed
        repeat={Infinity} // loop hamesha
        className="text-primary" // text color (Tailwind + shadcn primary)
      />
    </h2>
  );
}

export default BannerSubtitle;
