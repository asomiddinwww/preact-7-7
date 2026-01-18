import logo from "../../img/Logo.svg"
import search from "../../img/search.svg"
import shop from "../../img/shop.svg"
import log from "../../img/Logout.svg"
import {Button} from "antd"
import { NavLink, useLocation } from "react-router-dom"
import { useReduxDispatch } from "../../hooks/useRedux"
import { setAuhorizationModalVisiblty } from "../../redux/modal-store"
const Header = () => {
    const {pathname} = useLocation();
    const dispatch = useReduxDispatch();
  return (
    <div className="w-full border-b-1 border-[#46A35880]">
        <div className="w-[90%] m-auto flex p-4 items-center justify-between">
            <div><img src={logo} alt="" /></div>
            <div>
                <ul className="flex items-center gap-10">
                    <NavLink to={"/home"} className={({isActive}) => isActive ? "border-b-3 pb-3 border-[#46A358]" : "pb-3 border-b-3 border-[#ffffff00]"}>Home</NavLink>
                    <NavLink to={"/shop"} className={({isActive}) => isActive ? "border-b-3 pb-3 border-[#46A358]" : "pb-3 border-b-3 border-[#ffffff00]"}>Shop</NavLink>
                    <NavLink to={"/Plant"} className={({isActive}) => isActive ? "border-b-3 pb-3 border-[#46A358]" : "pb-3 border-b-3 border-[#ffffff00]"}>Plant Care</NavLink>
                    <NavLink to={"/Blogs"} className={({isActive}) => isActive ? "border-b-3 pb-3 border-[#46A358]" : "pb-3 border-b-3 border-[#ffffff00]"}>Blog</NavLink>
                </ul>
            </div>
            <div className="flex items-center gap-7">
                <div><img src={search} alt={search} /></div>
                <div><img src={shop}  /></div>
                <div>
                    <Button onClick={() => dispatch(setAuhorizationModalVisiblty())} type="primary" className="!pl-5 !pr-5 !bg-[#46A358] !h-9 !font-700"><img src={log} alt="" />Login</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header