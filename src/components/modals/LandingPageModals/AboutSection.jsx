/* eslint-disable no-unused-vars */
import React from 'react'
import PlayIcons from '../../Icons/PlayIcons'
import LearnIcons from '../../Icons/LearnIcons'
import EarnIcons from '../../Icons/EarnIcons'
import CirclePlayIcon from '../../Icons/CirclePlayIcon'
import CircleLearn from '../../Icons/CircleLearn'
import CircleEarn from '../../Icons/CircleEarn'
//    data-aos-duration="3000" data-aos="fade-up"

const AboutSection = () => {
  return (
    <section id='about-section'>
    <div className='flex items-center justify-center'>    
    <div 
     className='h-full lg:justify-between text-center  lg:gap-[102px] md:gap-12 gap-14  ml-8 md:ml-0 px-32 flex flex-col md:flex-row'>
        <div className='flex gap-[28px] flex-col justify-center text-center align-middle items-center' data-aos-duration="1000" data-aos="fade-left">
          <div className='relative -ml-10 '>
              <div className="absolute  bg-green-Primary_2 rounded-[10px]   mt-[4px] px-[17px] py-[26px] flex justify-center text-green-Primary_1 ">
                <PlayIcons/>
              </div>
              <div  className="z-20  bg-green-Primary_4 rounded-[10px] w-[104px] h-[104px] ml-[4px] "> </div>
            </div>
            <div>
              <div className='flex items-center gap-[12px] md:ml-5 ml-9 '>
                <CirclePlayIcon/>
                <span className='text-black md:text-[36px] text-[25px] font-bold'>Play</span>
              </div>
              <div className='w-[290px] md:w-[270px] flex justify-center items-center text-center -ml-9'>
                <p className='text-[#4B4D52] px-3 md:text-[24px] text-[21px] font-normal flex-wrap flex'>Play quiz in form of practice question in your related field of studies. </p>
              </div>
            </div>
          </div>

          <div className='flex gap-[28px] flex-col justify-center text-center align-middle items-center md:-mt-9' data-aos-duration="1000" data-aos="fade-right">
          <div className='relative -ml-12 lg:-ml-4 md:-ml-4' >
              <div className="absolute  bg-blue-100 rounded-[10px]  mt-[4px] px-[17px] py-[26px] flex justify-center text-green-Primary_1 ">
              <LearnIcons/>
              </div>
              <div  className="z-20  bg-blue-200 rounded-[10px] w-[104px] h-[104px] ml-[4px] "> </div>
            </div>
            <div>
              <div className='flex items-center lg:ml-5 ml-5 md:ml-0 gap-[12px] '>
                <CircleLearn/>
                <span className='text-black md:text-[36px] text-[25px] font-bold'>Learn</span>
              </div>
              <div className='lg:w-[270px] w-[270px] md:w-[200px] flex flex-wrap justify-center items-center text-center -ml-9'>
                <p className='text-[#4B4D52] md:text-[24px] text-[21px] font-normal '>Learn by taking quiz with solution to each questions. </p>
              </div>
            </div>
          </div>
          <div className='flex gap-[28px] flex-col justify-center text-center align-middle items-center' data-aos-duration="1000" data-aos="fade-left">
          <div className='relative lg:-ml-14 ml-[-50px] md:ml-[-20px] '>
              <div className="absolute  bg-red-200 rounded-[10px]  mt-[4px] px-[17px] py-[26px] flex justify-center text-green-Primary_1 ">
              <EarnIcons/>
              </div>
              <div  className="z-20  bg-red-100 rounded-[10px] w-[104px] h-[104px] ml-[4px] "> </div>
            </div>
            <div>
              <div className='flex items-center ml-5 gap-[12px]'>
                <CircleEarn/>
                <span className='text-black md:text-[36px] text-[25px] font-bold'>Earn</span>
              </div>
              <div className='lg:w-[270px] w-[270px] md:w-[250px] flex justify-center items-center text-center -ml-9'>
                <p className='text-[#4B4D52] md:text-[24px] text-[21px] font-normal'>Earn up to N10,000 in saturday live game and up to N1000 per day when you pratice.</p>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className='flex items-center justify-center'>    

          <div className='AboutBg bg-no-repeat flex justify-between md:flex-row flex-col md:gap-12 py-8  mx-[23px] md:mx-0  md:px-[50px]  lg:h-[272px]'>
            <div className='flex flex-col items-center justify-center'>
              <h4 className='md:text-[72px] text-[40px] font-bold text-[#F9F9F9]'>200K</h4>
              <p className='flex text-center md:text-[20px] text-[15px] w-[100px] font-semibold text-[#F2F2F2]' >Earned by Users</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h4 className='md:text-[72px] text-[40px] font-bold text-[#F9F9F9]'>5K</h4>
              <p className='flex text-center md:text-[20px] text-[15px] w-[120px] font-semibold text-[#F2F2F2]' >download on Playstore</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h4 className='md:text-[72px] text-[40px] font-bold text-[#F9F9F9]'>4.8</h4>
              <p className='flex text-center md:text-[20px] text-[15px] w-[100px] font-semibold text-[#F2F2F2]' >App store rating</p>
            </div>
          </div>
          </div>
    </section>
  )
}

export default AboutSection