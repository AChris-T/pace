import playStore from "../../../assets/Images/mockup.png"
import play from "../../../assets/Images/playStore.png"
const PlayStore = () => {
  return (
    <div className="mt-20 lg:mx-48 rounded-[30px] py-[30px] lg:px-[5%] px-6 bg-green-Primary_1 mx-3 lg:w-[73%] md:h-[350px] flex flex-col md:flex-row gap-4 md:gap-14 ">
      <img src={playStore} alt="playstore" className="h-[320px]"/>
      <div className="flex flex-col items-center justify-center md:items-start">
        <p className="font-medium mt-8 leading-tight text-[48px] text-white flex text-center md:text-left">We make Learning fun and rewarding.</p>
        <button className=' flex items-center justify-center bg-white w-[208px]   mt-12 md:mt-4 h-[71px] rounded-[83.502px]'>
            <img src={play}/>
            <div className="">
                Coming Soon <br/> <strong>Google Play</strong>
            </div>
            </button>
      </div>
    </div>
  )
}

export default PlayStore
