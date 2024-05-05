/* eslint-disable no-unused-vars */
import React from 'react'
import PlayIcons from '../../Icons/PlayIcons'
import LearnIcons from '../../Icons/LearnIcons'
import EarnIcons from '../../Icons/EarnIcons'
import CirclePlayIcon from '../../Icons/CirclePlayIcon'
import CircleLearn from '../../Icons/CircleLearn'
import CircleEarn from '../../Icons/CircleEarn'

const AboutSection = () => {
  return (
    <div>
    <div className='flex justify-center items-center'>    
    <div className='h-full lg:justify-between text-center  md:gap-[102px] gap-10 ml-8 md:ml-0 flex flex-col md:flex-row'>
        <div className='flex gap-[28px] flex-col justify-center text-center align-middle items-center'>
          <div className='relative -ml-10   '>
              <div className="absolute  bg-green-Primary_2 rounded-[10px]   mt-[4px] px-[17px] py-[26px] flex justify-center text-green-Primary_1 ">
                <PlayIcons/>
              </div>
              <div  className="z-20  bg-green-Primary_4 rounded-[10px] w-[104px] h-[104px] ml-[4px] "> </div>
            </div>
            <div>
              <div className='flex items-center gap-[12px] md:ml-5 ml-9 '>
                <CirclePlayIcon/>
                <span className='text-black text-[36px] font-bold'>Play</span>
              </div>
              <div className='w-[290px] md:w-[270px] flex justify-center items-center text-center -ml-9'>
                <p className='text-[#4B4D52] px-3 text-[24px] font-normal flex-wrap flex'>Play quiz in form of practice question in your related field of studies. </p>
              </div>
            </div>
          </div>

          <div className='flex gap-[28px] flex-col justify-center text-center align-middle items-center md:-mt-9'>
          <div className='relative lg:-ml-14 md:-ml-4 -ml-14'>
              <div className="absolute  bg-green-Primary_2 rounded-[10px]  mt-[4px] px-[17px] py-[26px] flex justify-center text-green-Primary_1 ">
              <LearnIcons/>
              </div>
              <div  className="z-20  bg-green-Primary_4 rounded-[10px] w-[104px] h-[104px] ml-[4px] "> </div>
            </div>
            <div>
              <div className='flex items-center lg:ml-5 ml-5 md:ml-0 gap-[12px] '>
                <CircleLearn/>
                <span className='text-black text-[36px] font-bold'>Learn</span>
              </div>
              <div className='lg:w-[270px] w-[270px] md:w-[200px] flex flex-wrap justify-center items-center text-center -ml-9'>
                <p className='text-[#4B4D52] text-[24px] font-normal '>Learn by taking quiz with solution to each questions. </p>
              </div>
            </div>
          </div>
          <div className='flex gap-[28px] flex-col justify-center text-center align-middle items-center'>
          <div className='relative -ml-14 '>
              <div className="absolute  bg-green-Primary_2 rounded-[10px]  mt-[4px] px-[17px] py-[26px] flex justify-center text-green-Primary_1 ">
              <EarnIcons/>
              </div>
              <div  className="z-20  bg-green-Primary_4 rounded-[10px] w-[104px] h-[104px] ml-[4px] "> </div>
            </div>
            <div>
              <div className='flex items-center ml-5 gap-[12px]'>
                <CircleEarn/>
                <span className='text-black text-[36px] font-bold'>Earn</span>
              </div>
              <div className='lg:w-[270px] w-[270px] md:w-[250px] flex justify-center items-center text-center -ml-9'>
                <p className='text-[#4B4D52] text-[24px] font-normal'>Earn up to N10,000 in saturday live game and up to N1000 per day when you pratice.</p>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div className='flex justify-center items-center'>    

          <div className='AboutBg bg-no-repeat flex justify-between md:flex-row flex-col md:gap-12 py-8   md:px-[50px]  lg:h-[272px]'>
            <div className='flex flex-col items-center justify-center'>
              <h4 className='text-[72px] font-bold text-[#F9F9F9]'>200K</h4>
              <p className='flex text-center text-[20px] w-[100px] font-semibold text-[#F2F2F2]' >Earned by Users</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h4 className='text-[72px] font-bold text-[#F9F9F9]'>5K</h4>
              <p className='flex text-center text-[20px] w-[120px] font-semibold text-[#F2F2F2]' >download on Playstore</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h4 className='text-[72px] font-bold text-[#F9F9F9]'>4.8</h4>
              <p className='flex text-center text-[20px] w-[100px] font-semibold text-[#F2F2F2]' >App store rating</p>
            </div>
          </div>
          </div>
    </div>
  )
}

export default AboutSection