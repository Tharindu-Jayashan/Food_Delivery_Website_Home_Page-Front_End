import React, { useState } from 'react';
import './Navbar.css';


const Navbar = () => {

    const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src="./images/logo.png" alt="" className="logo" />
        <ui className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
            <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
            <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</li>
        </ui>
        <div className="navbar-right">
                <img src="./images/search_icon.png" alt="" className="" />

                <div className="navbar-search-icon">
                    <img src="./images/basket_icon.png" alt="" />
                    <div className="dot"></div>
            </div>
            <button className="signin">sign in</button>
        </div>
    </div>
  )
}

export default Navbar