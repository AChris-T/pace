/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import PaceAppLogo from "../../../assets/Images/PaceApplogo.png"
import NavIcon from '../../Icons/NavIcon'
import { NavLink,useLocation } from 'react-router-dom'
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'
import Aos from 'aos';


export const Navbar = () => {
  
  const location = useLocation();
  const [showBorder, setShowBorder] = useState({ donate: false, about: false,home:false,howToPlay:false });
  const [active,setactive] = useState(false);

  window.addEventListener("scroll",function(){
    if(this.window.scrollY > 100){
      setactive(true)
    }else{
      setactive(false)
    }

  })
  useEffect (() =>{
    Aos.init({});
  },[])
  // Define the route path for the home page
  const homePagePath = '/';

  // Define routes where you want to show only FAQs
  const faqsPagePath = '/FAQS';

  // Check if the current location is the home page
  const isHomePage = location.pathname === homePagePath;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home-section', 'about-section', 'howToPlay-section'];

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
          setShowBorder(prevState => ({ ...prevState, [sectionId]: isInViewport }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  


  const [opened, { toggle }] = useDisclosure(false);

  return (
    // className={`${active ? "transition duration-700 w-full max-w-[1440px] mx-auto bg-white fixed shadow-lg top-0  " : ""} border-green-Primary_4 border-b-[1px] md:border-b-0  top-0 bg-gray-800 z-10`}
    <div>
    <div data-aos={active?"fade-down":""} className={`${active ? "transition  duration-700 w-full fixed shadow-lg -translate-y-1 py-[8px]  z-50 top-0 max-w-[1440px] bg-green-Primary_1 mx-auto " : "py-[14px]"} bg-green-Primary_1 flex items-center justify-between md:px-[40px] px-[20px] lg:px-[70px]  md:border-b-[1px] border-green-Primary_4`}>
        <div className='flex items-center gap-2'>
            <img src={PaceAppLogo} alt="PaceAPp" width={"45px"}/>
            <h2 className='text-2xl font-bold text-white'>The Pace App</h2>
        </div>
        <div className='flex items-center gap-[30px' onClick={toggle}>
            <NavIcon/>
        </div>
        <div className='lg:flex  items-center md:gap-4 lg:gap-[30px] hidden '>
            {/*  <NavLink to="/"
              className='flex font-bold text-[px2rem(18)] text-[#fff]'
              style={({isActive})=>{
                return{
                  borderBottom:isActive?"px2rem(5) solid white":""
                }
              }}
             >
                 Home  
             </NavLink> */}
            {/*  <NavLink to="/News"
              className='flex font-bold text-[18px] text-[#fff]'
              style={({isActive})=>{
                return{
                  borderBottom:isActive?"5px solid white":""
                }
              }}
             >
                 News  
             </NavLink>
             <NavLink to="/FAQS"
              className='flex font-bold text-[18px] text-[#fff]'
              style={({isActive})=>{
                return{
                  borderBottom:isActive?"5px solid white":""
                }
              }}
             >
                 FAQS 
             </NavLink>
             <NavLink to="/Donate"
              className='flex font-bold text-[18px] text-[#fff]'
              style={({isActive})=>{
                return{
                  borderBottom:isActive?"5px solid white":""
                }
              }}
             >
                 Donate 
             </NavLink> */}
             {isHomePage ? (
        // Display everything on the home page
        <>
        <div className={` ${showBorder ? 'border-b-4 border-white' : ''}`}>

        <button
          to="/"
          className={`font-bold text-[18px] text-white ${showBorder.home ? 'border-b-4 border-white bg-green-Primary_1' : ''}`}
          onClick={() => scrollToSection('home-section')}
        >
            Home
        </button>
        </div>
        
          <NavLink
            to="/News"
            className='flex font-bold text-[18px] text-[#fff]'
            style={({ isActive }) => ({
              borderBottom: isActive ? '5px solid white' : '',
            })}
          >
            News
          </NavLink>
          <div className={` ${showBorder.about ? 'border-b-4 border-white' : ''}`}>

          <button
            onClick={() => scrollToSection('about-section')}
            className='flex font-bold text-[18px] text-[#fff]'
          >
            About
          </button>
          </div>
          <button
            onClick={() => scrollToSection('about-section')}
            className='flex font-bold text-[18px] text-[#fff]'
          >
            How to play
          </button>
          <NavLink
            to="/FAQS"
            className='flex font-bold text-[18px] text-[#fff]'
            style={({ isActive }) => ({
              borderBottom: isActive ? '5px solid white' : '',
            })}
          >
            FAQS
          </NavLink>
          <div className={` ${showBorder.donateSection ? 'border-b-4 border-white' : ''}`}>

          <button
            onClick={() => scrollToSection('donate-section')}
            className='flex font-bold text-[18px] text-[#fff]'
            style={{ borderBottom: 'none' }}
          >
            Donate
          </button>
          </div>
        </>
      ) : (
        // Display only FAQs if not on the home page
        <>      
         <NavLink to="/"
              className='flex font-bold text-[px2rem(18)] text-[#fff]'
              style={({isActive})=>{
                return{
                  borderBottom:isActive?"px2rem(5) solid white":""
                }
              }}
             >
                 Home  
             </NavLink> 
         <NavLink
          to="/faqs"
          className='flex font-bold text-[18px] text-[#fff]'
          style={({ isActive }) => ({
            borderBottom: isActive ? '5px solid white' : '',
          })}
        >
          FAQS
        </NavLink>
        <NavLink
          to='/news'
          className='flex font-bold text-[18px] text-[#fff]'
          style={({ isActive }) => ({
            borderBottom: isActive ? '5px solid white' : '',
          })}
        >
          News
        </NavLink>
        </>

      )}

             
             <div className='relative mt-2 cursor-pointer'>
                <NavLink to="/login" className="absolute  bg-white rounded-[50px] w-[120px] h-[50px] flex justify-center items-center text-green-Primary_1 font-bold leading-[31.2px] text-[18px]">Play</NavLink>
                <div  className="z-20 mt-[3px] bg-green-Primary_4 rounded-[50px] w-[120px] h-[50px]"> </div>
             </div>
             
         </div>
    </div>





         <Box maw={1000} mx="auto" style={{background:" #16956C"}}>
      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
      <text>
      <div className='flex flex-col items-center gap-4 px-2 pb-4 pt-9'>
             <NavLink to="/"
              className='flex font-bold text-[18px] text-[#fff]'
              style={({isActive})=>{
                return{
                  borderBottom:isActive?"5px solid white":""
                }
              }}
             >
                 Home  
             </NavLink>
             <NavLink to="/News"
              className='flex font-bold text-[18px] text-[#fff]'
              style={({isActive})=>{
                return{
                  borderBottom:isActive?"5px solid white":""
                }
              }}
             >
                 News  
             </NavLink>
             <NavLink to="/FAQS"
              className='flex font-bold text-[18px] text-[#fff]'
              style={({isActive})=>{
                return{
                  borderBottom:isActive?"5px solid white":""
                }
              }}
             >
                 FAQS 
             </NavLink>
             <NavLink to="/Donate"
              className='flex font-bold text-[18px] text-[#fff]'
              style={({isActive})=>{
                return{
                  borderBottom:isActive?"5px solid white":""
                }
              }}
             >
                 Donate 
             </NavLink> 
             <div className='relative mt-2 cursor-pointer'>
                <NavLink to="/login" className="absolute  bg-white rounded-[50px] w-[120px] h-[50px] flex justify-center items-center text-green-Primary_1 font-bold leading-[31.2px] text-[18px]">Play</NavLink>
                <div  className="z-20 mt-[3px] bg-green-Primary_4 rounded-[50px] w-[120px] h-[50px]"> </div>
             </div>     
             </div>
             </text>
             </Collapse>
    </Box>
    </div>
  )
}
