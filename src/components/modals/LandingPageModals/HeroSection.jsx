/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import phone from "../../../assets/Images/phone2.png"
import playStore from "../../../assets/Images/playStore.png"
import TimeIcons from '../../Icons/TimeIcons'
import  AOS  from "aos"
import 'aos/dist/aos.css'

const HeroSection = () => {
    useEffect (() =>{
        AOS.init({});
      },[])
  return (
    <section id='home-section'>
    <div className='h-[1000px] md:h-[700px] lg:h-[700px]'>
    <div className=' backClip bg-green-Primary_1 h-[870px] md:h-[500px] lg:h-[600px]  flex flex-col md:flex-row justify-between lg:px-[160px] md:pl-[30px] md:py-12 py-[120px]   lg:py-[90px]'>
    <div className='flex flex-col justify-center mt-[-80px] '>
        <div  data-aos="fade-up" className='flex flex-wrap  md:px-0 px-4 items-center justify-center text-center  lg:justify-center md:flex-nowrap'>
            <h2 className='flex lg:text-[64px] md:text-[55px] text-[45px] font-semibold text-white'>Play</h2>
            <div className='w-2 h-2 md:mt-5 mt-4 mr-3 bg-white'></div>
            <h2 className='flex lg:text-[64px] md:text-[55px] text-[45px] font-semibold text-white'>
            Learn</h2>
            <div className='w-2 h-2 mr-3 bg-white md:mt-7  mt-5'></div>
            <h2 className='flex lg:text-[64px] md:text-[55px] text-[45px] font-semibold text-white'>
            Earn</h2>
            <div className='w-2 h-2 md:mt-8 mt-5 mr-3 bg-white'></div>
        </div>
        <div className='flex md:text-center justify-center   md:justify-start w-full items-center lg:items-start text-center md:px-[0px]' data-aos="fade-right">
            <h2 className='text-white lg:text-[40px] text-[30px] text-center md:text-left font-medium  w-[400px] leading-10'>The Pace App makes studying fun and also reward you.</h2>
        </div>
        <div className='flex flex-col items-center justify-center md:gap-4 md:flex-row md:justify-start'>
            <button className=' flex items-center justify-center py-3 bg-white md:w-[208px] w-[150px]  md:ml-0 mt-5 md:h-[71px] rounded-[83.502px]'>
            <img src={playStore} className='w-[30px]'/>
            <div className='md:text-[15px] text-[10px] '>
                GET IT ON <br/> <strong>Google Play</strong>
            </div>
            </button>
            <div className='flex flex-col items-center justify-center mt-4 '>
            <h4 className='md:text-[24px] text-[18px] font-normal text-white'>NEXT LIVE QUIZ</h4>
            <button className=' text-white gap-2 font-bold bg-transparent border border-green-Primary_4 w-[208px]  md:ml-0  h-[35px] rounded-[83.502px] flex items-center justify-center'>
                <TimeIcons/>  10:20:30
            </button>
            
            </div>
        </div>
     </div>
            <div data-aos="fade-left" className='px-4 mt-12 md:mt-10 md:px-0' >
                <img src={phone} alt='phone' className='z-20 IconImage md:w-[400px] '/>
            </div>
    </div>
    </div>
    </section>
  )
}

export default HeroSection