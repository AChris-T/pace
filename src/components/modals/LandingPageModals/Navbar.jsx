/* eslint-disable no-unused-vars */
import React from 'react'
import PaceAppLogo from "../../../assets/Images/PaceApplogo.png"
import NavIcon from '../../Icons/NavIcon'
import { NavLink } from 'react-router-dom'
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'

export const Navbar = () => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <div className=' border-green-Primary_4 border-b-[1px] md:border-b-0'>
    <div className='bg-green-Primary_1 flex items-center justify-between md:px-[40px] px-[20px] lg:px-[70px] py-[23px] md:border-b-[1px] border-green-Primary_4'>
        <div className='flex items-center gap-2'>
            <img src={PaceAppLogo} alt="PaceAPp" width={"45px"}/>
            <h2 className='text-2xl font-bold text-white'>The Pace App</h2>
        </div>
        <div className='flex items-center gap-[30px]' onClick={toggle}>
            <NavIcon/>
        </div>
        <div className='md:flex  items-center md:gap-4 lg:gap-[30px] hidden '>
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
    </div>
         <Box maw={400} mx="auto" style={{background:" #16956C"}}>
      <Collapse in={opened} transitionDuration={1000} transitionTimingFunction="linear">
      <text>
      <div className='flex flex-col items-center gap-4 px-2 pb-4'>
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
