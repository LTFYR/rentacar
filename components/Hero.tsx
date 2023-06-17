"use client";
import React from "react";
import RedButton from "./RedButton";
import Image from "next/image";

const Hero = () => {
  const handleExplore = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find,reserv or rent a new car just now quickly and easily
        </h1>
        <p className="hero__subtitle">
          Get your dream car with our amazing booking web service and enjoy it !
        </p>
        <RedButton
          title="Explore The Cars"
          customStyles="bg-red-600 text-white mt-10 rounded-full"
          customOnClick={handleExplore}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
