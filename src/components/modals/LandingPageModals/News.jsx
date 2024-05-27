import {useState,useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import NewsBlog from './NewsBlog'
import playStore from "../../../assets/Images/playStore.png"

const News = () => {
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
    <div className='h-full lg:justify-between text-center  gap-[79px]  flex flex-col  '>
    <div className="flex flex-col items-center py-[56px] justify-center w-full bg-green-Primary_1">
      <h3 className="flex font-normal text-[48px] text-white myFont">Latest Articles</h3>
      <p className="font-semibold text-[24px] text-white">Articles you will love</p>
    </div>
    <div className='h-full lg:px-[72px]  px-[12px]  md:px-[20px] lg:justify-between text-center lg:gap-[86px]  gap-10  grid lg:grid-cols-3 md:grid-cols-2 '>
      {articles.map((article,index) =>{
      return(
        <NewsBlog 
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
    </div>
    <div className='flex justify-center'>
      <div className='relative mt-2 cursor-pointer'>
        <NavLink to='/news' className="absolute  bg-[#16956C] rounded-[50px]  w-[300px] md:w-[413px] h-[60px] flex justify-center items-center text-white font-bold leading-[31.2px] text-[18px]">see more</NavLink>
      <div  className="z-20 mt-[5px] bg-green-Primary_4 rounded-[50px]  w-[300px] md:w-[413px] h-[60px]"> </div>
    </div>
    </div>
    <div className="flex items-center justify-center">
            <div className="w-[80%] bg-green-Primary_1 rounded-[30px] md:h-[255px] md:px-16 px-7 py-10 flex flex-col md:flex-row items-center justify-around ">
              <div className="flex flex-col gap-8 md:gap-0 ">                
                <div className="flex flex-row items-center justify-start leading-normal text-center " >
                <h3 className="text-[48px] font-normal text-[#fff] flex text-center">Start Earning today</h3>
                <div className='hidden w-2 h-2 mt-20 ml-1 bg-white md:mt-3 md:flex '></div>
                </div>
                <div className="flex items-center justify-start -mt-5 ">
                <h3 className="text-[48px] font-normal text-[#fff] leading-normal text-center">Download App for free</h3>
                <div className='hidden w-2 h-2 mt-3 ml-1 bg-white md:flex'></div>
                </div>
              </div>
              <div>
              <button className=' flex items-center justify-center bg-white w-[208px]  md:ml-0 mt-5 h-[71px] rounded-[83.502px]'>
            <img src={playStore}/>
            <div>
                GET IT ON <br/> <strong>Google Play</strong>
            </div>
            </button>
              </div>
            </div>

        </div>  
    </div>
    )
    }
export default News
