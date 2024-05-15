//import React from 'react'
import { useState, useEffect } from 'react';
import { gsap } from 'gsap'; // Make sure you've installed gsap
import { Flip } from 'gsap/Flip'; // Import Flip utility from gsap
import 'tailwindcss/tailwind.css';
import "./slider.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import student from "../../../assets/Images/student.jpg"

const SliderSection = () => {
  const Customeritems = [
    {
      CandidateName: "Ajibade Robiat",
      Mode:"UTME Student",
      description:"The Pace App helps me learn in a fun way. It helps me relax and the Earnings motivates me.",
      Comment:"Its a very good initative.",
      image:"candidate2"
    },
    {
      CandidateName: "Abiola Kazeem",
      Mode:"A'level Student",
      description:"The Pace App helps me learn in a fun way. It helps me relax and the Earnings motivates me.",
      Comment:"Its a very good initative.",
      image:"candidate3"    
    },
    {
      CandidateName: "Uzoh Emi",
      Mode:"WAEC Student",
      description:"The Pace App helps me learn in a fun way. It helps me relax and the Earnings motivates me.",
      Comment:"Its a very good initative.",
      image:"candidate2"
    },
       
  ]
  const [items, setItems] = useState(Customeritems);
  const [displayedItems, setDisplayedItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(Flip);
    updateDisplayedItems();
  }, []);

  const updateDisplayedItems = () => {
    const startIndex = items.length > 3 ? items.length - 3 : 0;
    setDisplayedItems(items.slice(startIndex));
  };

  const moveCard = (direction) => {
    setItems(prevItems => {
      const newItems = [...prevItems];
      if (direction === 'next') {
        newItems.unshift(newItems.pop()); // Move the last item to the beginning
      } else if (direction === 'prev') {
        newItems.push(newItems.shift()); // Move the first item to the end
      }
      return newItems;
    });
    updateDisplayedItems();
  };

  const handleNextClick = () => {
    let state = Flip.getState(".item");
    moveCard('next');
    animateSlider(state);
  };

  const handlePrevClick = () => {
    let state = Flip.getState(".item");
    moveCard('prev');
    animateSlider(state);
  };

  const animateSlider = (state) => {
    Flip.from(state, {
      targets: ".item",
      ease: "sine.inOut",
      absolute: true,
      onStart: () => {
        setActiveIndex(activeIndex === 2 ? 0 : activeIndex + 1); // Update the active index
      },
      onEnter: (elements, index) => {
        const backgroundColor = index === activeIndex ? 'white' : (index + activeIndex) % 2 === 0 ? 'green' : 'yellow';
        return gsap.from(elements, {
          yPercent: 20,
          opacity: 0,
          ease: "sine.out",
          backgroundColor
        });
      },
      onLeave: (element) => {
        return gsap.to(element, {
          yPercent: 20,
          xPercent: -20,
          transformOrigin: "bottom left",
          opacity: 0,
          ease: "sine.out",
          onComplete: () => {
            setItems(prevItems => prevItems.filter(item => item !== parseInt(element[0].textContent)));
          }
        });
      }
    });
  };

  
  return (
    <div>
    <div className='w-full bg-green-Primary_1 flex flex-col md:h-[708px] h-[860px] items-center lg:py-[80px] py-[46px]  lg:px-[0px]  '>
            <div className=" slidertop flex flex-col text-center gap-[15px] ">
                <h1 className='md:text-[48px] text-[25px] font-semibold text-[#fff]'>What Our Users are Saying</h1>
                <p className='md:text-[24px] text-[15px] px-10 md:px-0 text-[#fff] font-semibold'>These are recently verified customer stories & feedback</p>
          </div>  
          <div className='relative flex justify-between mt-10'>
              <div className="slider flex justify-between items-center lg:-ml-[360px] md:ml-[-320px] -ml-48 md:px-24 mt-36 h-full ">
             
                {displayedItems.map((item, index) => (
                <div key={index} className="item w-[266px] h-[490px] md:h-[300px] md:w-[500px] lg:w-[576px]" style={{ backgroundColor: index === 2 ? 'white' : (index + activeIndex) % 2 === 0 ? 'rgba(255, 255, 255, 0.303)' : 'rgba(255, 255, 255, 0.16)' }}>
                  <div className='flex flex-col items-center justify-between gap-5 md:flex-row '>
                    <div>  
                    <img src={student} alt='student' className='w-[150px] lg:w-[200px] h-[150px] lg:h-[200px] object-cover rounded-full'/>
                    </div>
                    <div className='flex flex-col md:w-[254px] items-center text-center md:text-start md:items-start  px-8 md:px-0'>
                      <h5 className='text-[24px] text-[#4B4D52]'>{item.CandidateName}</h5>
                      <p className='text-[16px] text-[#727479] italic mb-5'>{item.Mode}</p>
                      {item.title}
                      <p className='text-[18px] font-semibold text-[#4B4D52]'>{item.description}</p>
                      <p className='text-[18px] font-semibold mt-4 text-[#4B4D52]'>{item.Comment}</p>
                    </div>
                  </div>
                </div>
                ))}

            </div>
            <button className='flex justify-center items-center absolute bg-[#EBFFF980] w-[50px] h-[50px] rounded-full   md:top-[200px] top-0 lg:left-[-400px] left-[-30px] md:left-[-350px]' onClick={handleNextClick}> 
              <ArrowBackIcon className='text-white'/>
            </button>
            <button className='flex justify-center absolute top-[600px] items-center bg-[#EBFFF980] md:top-[200px] lg:right-[-400px] right-[-10px] md:right-[-330px] w-[50px] h-[50px] rounded-full' onClick={handlePrevClick}>
              <ArrowForwardIcon className='text-[white]'/>
            </button>
            
          </div>
  
    </div>
    </div>
  )
}

export default SliderSection




































