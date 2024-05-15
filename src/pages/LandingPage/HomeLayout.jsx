import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/modals/LandingPageModals/Navbar"
import Footer from "../../components/modals/LandingPageModals/Footer"

const HomeLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout
