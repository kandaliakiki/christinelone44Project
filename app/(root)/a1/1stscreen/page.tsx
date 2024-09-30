import HeroCarousel from "@/components/A1/HeroCarousel";
import HeroSection from "@/components/A1/HeroSection";
import SocialMediaSection from "@/components/A1/SocialMediaSection";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="flex justify-between">
        <div>
          <h1>
            Online <br></br>catalog
          </h1>
          <p>
            Use promocodes <br></br>for discounts
          </p>
        </div>
        <SocialMediaSection></SocialMediaSection>
      </div>
      <div className="flex items-center justify-center  ">
        <HeroCarousel></HeroCarousel>
      </div>
      <HeroSection></HeroSection>
    </main>
  );
};

export default page;
