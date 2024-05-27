/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const Blog = ({name,publish,title,description,url,urlToImage}) => {
  return (        
        <div className="flex items-center justify-center flex-col lg:flex-row  lg:gap-[79px] gap-[19px]">
        <img src={urlToImage} alt={url} className="w-[363px] lg:w-[500px] h-[350px]  rounded-md object-cover "/>
        <div className="text-left gap-[10px] flex flex-col">
        <p className="text-[#727479] tetxt-[18px] font-normal">Postes by:{name} | {publish}</p>
        <h3 className=" text-[20px] lg:text-[20px] font-semibold text-[#4B4D52]">{title}</h3>
        <p className="font-normal text-[16px] text-[#727479]">{description }</p>
        <div className='relative mt-2 cursor-pointer'>
                <Link to={url} target="_blank" className="absolute  bg-[#16956C] rounded-[50px] w-[200px] h-[60px] flex justify-center items-center text-white font-bold leading-[31.2px] text-[18px]">Read More</Link>
                <div  className="z-20 mt-[3px] bg-green-Primary_4 rounded-[50px] w-[200px] h-[60px]"> </div>
             </div> 
         
        </div>
        </div>
  )
}

export default Blog