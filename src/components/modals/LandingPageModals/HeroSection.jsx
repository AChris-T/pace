/* eslint-disable no-unused-vars */
import React from 'react'
import phone from "../../../assets/Images/phone2.png"
import playStore from "../../../assets/Images/playStore.png"
import TimeIcons from '../../Icons/TimeIcons'

const HeroSection = () => {
  return (
    <section id='home-section'>
    <div className='h-[1000px] md:h-[700px] lg:h-[700px]'>
    <div className=' backClip bg-green-Primary_1 h-[870px] md:h-[600px] lg:h-[600px]  flex flex-col md:flex-row justify-between lg:px-[160px] md:px-[40px] py-12  md:py-[90px]'>
    <div className='flex flex-col justify-center '>
        <div className='flex flex-wrap items-center justify-center md:flex-nowrap'>
            <h2 className='flex text-[64px] font-semibold text-white'>Play</h2>
            <div className='w-2 h-2 mt-5 mr-3 bg-white'></div>
            <h2 className='flex text-[64px] font-semibold text-white'>
            Learn</h2>
            <div className='w-2 h-2 mr-3 bg-white mt-7'></div>
            <h2 className='flex text-[64px] font-semibold text-white'>
            Earn</h2>
            <div className='w-2 h-2 mt-8 mr-3 bg-white'></div>
        </div>
        <div className='flex md:text-left md:items-start text-center md:px-[0px]'>
            <h2 className='text-white text-[40px] font-medium  w-[400px] leading-10'>The Pace App makes studying fun and also reward you.</h2>
        </div>
        <div className='flex flex-col items-center justify-center md:gap-4 md:flex-row md:justify-start'>
            <button className=' flex items-center justify-center bg-white w-[208px]  md:ml-0 mt-5 h-[71px] rounded-[83.502px]'>
            <img src={playStore}/>
            <div>
                GET IT ON <br/> <strong>Google Play</strong>
            </div>
            </button>
            <div className='flex flex-col items-center justify-center mt-4 '>
            <h4 className='text-[24px] font-normal text-white'>NEXT LIVE QUIZ</h4>
            <button className=' text-white gap-2 font-bold bg-transparent border border-green-Primary_4 w-[208px]  md:ml-0  h-[35px] rounded-[83.502px] flex items-center justify-center'>
                <TimeIcons/>  10:20:30
            </button>
            
            </div>
        </div>
     </div>
            <div className='px-4 mt-12 md:mt-10 md:px-0' >
                <img src={phone} alt='phone' className='z-20 IconImage md:w-[400px]'/>
            </div>
    </div>
    </div>
    </section>
  )
}

export default HeroSection