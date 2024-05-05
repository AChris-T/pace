import LandingPageLayout from "./pages/LandingPage/LandingPageLayout"
import '@mantine/core/styles.css';
import {  Route, Routes,} from "react-router-dom";
import Faqs from "./components/modals/LandingPageModals/Faqs";
import HomeLayout from "./pages/LandingPage/HomeLayout";
import News from "./components/modals/LandingPageModals/News";
import Donate from "./components/modals/LandingPageModals/Donate";
import Login from "./Utils/LoginForm";
import UtilLayout from "./Utils/UtilLayout";
import Register from "./Utils/RegisterForm";
import ForgetPassword from "./Utils/ForgetPassword";



function App() {

  return (
    <>
    <Routes>      
        <Route path="/" element={<HomeLayout/>}>
          <Route path ="/" element={<LandingPageLayout/>}/>
          <Route path ="/FAQS" element={<Faqs/>}/>
          <Route path ="/News" element={<News/>}/>
          <Route path ="/Donate" element={<Donate/>}/>
        </Route>
        <Route path="/" element={<UtilLayout/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        </Route>
        <Route path="/Forget-password" element={<ForgetPassword/>}/>

    </Routes>
    </>
  )
}

export default App
