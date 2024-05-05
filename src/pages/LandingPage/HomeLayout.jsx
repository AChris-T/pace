import { Outlet } from "react-router-dom"
import { Navbar } from "../../components/modals/LandingPageModals/Navbar"
import Footer from "../../components/modals/LandingPageModals/Footer"

const HomeLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default HomeLayout
