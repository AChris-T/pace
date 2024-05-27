/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

const NewsBlog = ({name,publish,title,description,url,urlToImage}) => {
    return (        
        <div className="flex  flex-col w-[350px] gap-5">
        <img src={urlToImage} alt={url} className=" h-[300px] w-[400px]  rounded-md object-cover "/>
        <div className="text-left gap-[10px] flex flex-col">
        <h3 className=" text-[20px] lg:text-[20px] font-semibold text-[#16956C]">{title}</h3>
        <p className="text-[#4b4d52] tetxt-[18px] font-normal">Postes by:{name} | {publish}</p>
    
        </div>
        </div>
  )
}

export default NewsBlog
