import paceapp from "../../../assets/Images/pacelogo.png"
import facebook from "../../../assets/Images/faceb.png"
import int from "../../../assets/Images/int.png"
import twitter from "../../../assets/Images/twit.png"
import linkedin from "../../../assets/Images/lin.png"
import flag from "../../../assets/Images/flag.png"
const Footer = () => {
  return (
    <div className="bg-green-Primary_1 lg:px-20 px-8 pt-16  md:pr-24 mt-12">
    <div className="border-b-[1px] border-green-Primary_4  flex flex-col md:flex-row md:gap-0 gap-8 justify-between">
    <div className="flex flex-col  gap-6">
      <img src={paceapp} alt="pace" width={"229px"} height={'64px'}/>
      <h3 className="text-[24px] leading-6 text-[#fff] font-bold">SOCIAL MEDIA</h3>
      <div className=" flex flex-row gap-6">
        <img src={facebook} alt="facebook" className="w-[45px] h-[45px] rounded-full bg-white object-contain py-3 "/>
        <img src={int} alt="facebook" className="w-[45px] h-[45px] rounded-full bg-white object-contain py-3 "/>
        <img src={twitter} alt="facebook" className="w-[45px] h-[45px] rounded-full bg-white object-contain py-3 "/>
        <img src={linkedin} alt="facebook" className="w-[45px] h-[45px] rounded-full bg-white object-contain py-3 "/>

      </div>

    </div>
    <div className="flex flex-col mt-4">
    <h3 className="text-[24px] leading-6 text-[#fff] mb-3 font-bold">Company</h3>
     <a href="" className="text-[#f2f2f2] font-normal text-[20px]">About us</a>
     <a href="" className="text-[#f2f2f2] font-normal text-[20px]">Donate</a>
     <a href="" className="text-[#f2f2f2] font-normal text-[20px]">How to play</a>
     <a href="" className="text-[#f2f2f2] font-normal text-[20px]">Blog</a>
     <a href="" className="text-[#f2f2f2] font-normal text-[20px]">FAQs</a>

    </div>
    <div className="flex flex-col mt-4">
    <h3 className="text-[24px] leading-6 text-[#fff] mb-3 font-bold">LEGAL</h3>
     <a href="" className="text-[#f2f2f2] font-normal text-[20px]">Terms of service</a>
     <a href="" className="text-[#f2f2f2] font-normal text-[20px]">Privacy policy</a>
    </div>
    <div className="flex flex-col mt-4 mb-10 md:mb-32">
    <h3 className="text-[24px] leading-6 text-[#fff] mb-3 font-bold">CONTACTS</h3>
     <a href="" className="text-[#f2f2f2] font-normal text-[20px]">+2349032123212</a>
     <a href="" className="text-[#f2f2f2] font-normal text-[20px]">support@thepaceapp.com</a>
    </div>
    </div>
    <div className="flex flex-row justify-start mt-3 items-start gap-3 md:items-center">
      <img src={flag} alt='flag' className="mt-2 md:mt-0"/>
      <h3 className="text-[#f2f2f2] font-normal text-24px">Copyright ©  2021-2021 The Pace App. All rights reserved.</h3>
    </div>
    </div>
  )
}

export default Footer
