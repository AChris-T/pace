import {useState,useEffect} from 'react'
import axios from 'axios'
import Blog from './Blog'
import { NavLink } from 'react-router-dom'

const BlogInfo = () => {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        const getArticles = async () =>{
            const response = await axios.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=83a991a5392a4cff96bcb11a9cffc24f")
            console.log(response)
            setArticles(response.data.articles)
          }
          getArticles()
    },[])
  return (
    <div className='h-full lg:px-[150px] mt-20 px-[26px]  md:px-[5px] lg:justify-between text-center  gap-[52px]  flex flex-col '>
        <div className="flex flex-col  -gap-1 items-center justify-center w-full">
          <h3 className="flex font-normal text-[48px] text-green-Primary_1 myFont">Latest blog post</h3>
          <p className="font-semibold text-[24px] text-[#4B4D52]">Articles you will love</p>
        </div>
    {articles.slice(0, 5).map((article,index) =>{
      return(
      <Blog 
      key={index}
      title={article.title}
        description={article.description}
        url={article.url}
        urlToImage={article.urlToImage}
        name={article.author}
        publish={article.publishedAt}
      />

      )
    })}
    <div className='flex justify-center'>
    <div className='relative mt-2 cursor-pointer'>
      <NavLink to='/news' className="absolute  bg-[#16956C] rounded-[50px] w-[300px] md:w-[413px] h-[60px] flex justify-center items-center text-white font-bold leading-[31.2px] text-[18px]">Read more amazing articles</NavLink>
      <div  className="z-20 mt-[5px] bg-green-Primary_4 rounded-[50px] w-[300px] md:w-[413px] h-[60px]"> </div>
    </div>
    </div> 
         
    </div>
  )
}

export default BlogInfo
