import Donate from "../../../assets/Images/donate.png"
const Donation = () => {
  return (
    <setion id="donate-section" className="flex flex-col md:flex-row mt-16  bg-green-Primary_1 md:h-[520px] w-full">
    <div className="flex flex-1 ">
    <img src={Donate} alt="donate" className="object-cover w-[720px]"/>
    </div>
    <div className="flex flex-col justify-center flex-1 gap-4 px-4 md:px-10 lg:px-0 ">
        <h3 className="text-white font-normal flex-wrap text-[35px] text-left md:text-[48px]  flex mt-10 
        lg:pl-[80px] leading-10">We need your donation</h3>
        <p className="font-normal text-[24px] text-white leading-[30px] lg:px-[80px] ">
        Our aim has been to ensure that students don’t engage in fradulent activities.
        </p>
        <p className="font-normal text-[24px] text-white leading-[30px] lg:px-[80px]">
        We created a platform for them to earn while playing and learning.<br/>
        </p>
        <p className="font-normal text-[24px] text-white leading-[30px] lg:px-[80px]">
        With our current growing rate, we need your help to meet up.
        </p>
        <div className="flex justify-start w-full lg:ml-20 ">
        <div className='relative mt-2 mb-8 cursor-pointer '>
            <div className="absolute bg-white rounded-[50px] w-[120px] h-[50px] flex justify-center items-center text-green-Primary_1 font-bold leading-[31.2px] text-[18px]">Donate</div>
            <div  className="z-20 mt-[3px] bg-green-Primary_4 rounded-[50px] w-[120px] h-[50px]"> </div>
        </div>
        </div>
    </div>
   
    
      
    </setion>
  )
}

export default Donation
