import React from "react";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.png";
import HeroSection from "./HeroSection";
import FeaturedProduct from "./featuredProduct";
const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 pro"
        subtitle="Exprience the power of the latest iPhone 14 with our most Pro camera ever"
        link="/"
        image={iphone}
      />
      <FeaturedProduct />
      <HeroSection
        title="Build the utimate setup"
        subtitle="You ac add Stdudio display and colour-matched Magic accessories to your bag afte  configure ypur mac mini"
        link="/"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
