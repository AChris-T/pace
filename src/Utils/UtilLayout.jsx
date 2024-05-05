import { NavLink, Outlet } from "react-router-dom"

const UtilLayout = () => {
  return (
    <div className="max-w-[740px] mx-auto shadow-card overflow-x-hidden ">
    <div className="bg-white">
    <div className="px-8 py-8">
        <h3 className="text-[15.78px] font-normal text-[#4b4d52]">Welcome</h3>
        <div className="flex items-center justify-between">
            <NavLink to='/Register' className="text-[28.05px] font-normal text-[#30E0A8]"
            style={({isActive})=>{
                return{
                  color:isActive?"#16956C":"",
                  fontWeight:isActive?"bold":''
                }
              }}
            >Sign Up</NavLink>
            <NavLink to='/login'className="text-[28.05px] font-normla text-[#30E0A8]"
            style={({isActive})=>{
                return{
                  color:isActive?"#16956C":"",
                  fontWeight:isActive?"bold":''

                }
              }}>Sign In</NavLink>
        </div>
    </div>
        <Outlet/>
      
    </div>
    </div>
  )
}

export default UtilLayout
