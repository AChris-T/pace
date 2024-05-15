/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar } from "../../components/modals/LandingPageModals/Navbar";
import HeroSection from "../../components/modals/LandingPageModals/HeroSection";
import AboutSection from "../../components/modals/LandingPageModals/AboutSection";
import SliderSection from "../../components/modals/LandingPageModals/SliderSection";
import Blog from "../../components/modals/LandingPageModals/Blog";
import Donation from "../../components/modals/LandingPageModals/Donation";
import PlayStore from "../../components/modals/LandingPageModals/PlayStore";
import Footer from "../../components/modals/LandingPageModals/Footer";

const LandingPageLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto overflow-x-hidden ">
      <HeroSection/>
       <AboutSection/> 
      <SliderSection/> 
   {/*     <Blog/> */}
       <Donation/>
       <PlayStore/>
    </div>
  );
};

export default LandingPageLayout;
