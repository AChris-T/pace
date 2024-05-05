/* eslint-disable react/prop-types */
/* import React, { useState,Component } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { SliderData } from './SliderData';
import Card from '@mui/material/Card';
import candidate from "../../../assets/Images/candidate.png" */

import "./slider.css"
import Slider from "react-slick";



/* const MAX_VISIBILITY = 3;
 */
/* const Carousel = ({children}) => {


    const [active, setActive] = useState(2);
    const count = React.Children.count(children);
    
    return (
      <div className='carousel md:ml-[-100px] lg:ml-[100px] flex flex-col md:mt-10 mt-[90px]'>
        <div className="next">
          {active < count - 1 && <button className='nav left' onClick={() => setActive(i => i + 1)}><AiOutlineArrowLeft/></button>}
        </div>
        {React.Children.map(children, (child, i) => (
          <div className='card-container md:ml-[40px]' style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 4,
              '--direction': Math.sign(active -  i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'flex',
            }}>
            {child}
          </div> 
        ))}
        <div className="right">
          {active > 0 && <button className='nav right' onClick={() => setActive(i => i - 1)}><AiOutlineArrowRight/></button>}
        </div>
      </div>
    );
  }; */
  

const SliderSection = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div>
         <div className='w-full bg-green-Primary_1 flex flex-col justify-center items-center lg:py-[80px] py-[46px]  lg:px-[0px]  '>
        <div className=" slidertop flex flex-col text-center gap-[15px] ">
            <h1 className='lg:text-[48px] text-[40px] font-semibold text-[#fff]'>What Our Users are Saying</h1>
            <p className='text-[24px] text-[#fff] font-semibold'>These are recently verified customer stories & feedback</p>
        </div>   
 {/* <Slider {...settings}>     
       

      <div >
          <h3 className="text-r">1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider> */}
    </div>
    </div>
  )
}

export default SliderSection



