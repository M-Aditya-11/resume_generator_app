import React, { useState } from "react";
import './Navbar.css';
import { assets } from '../../assets/assets.js'

const Navbar = () => {

    const [menu,setMenu]=useState("home");

    return (
        <div className="navbar">
            <img src={assets.logo} alt="" className="logo" />
            <div className="navbar-box">
                <ul className="navbar-menu">
                    <li className={menu==="resume-templates"?"active":""}>Resume Templates</li>
                    <li className={menu==="cover-letters"?"active":""}>Cover Letters</li>
                </ul>
                <div className="navbar-right">
                    <button>Sign In</button>
                </div>
            </div>

        </div>
    )

}

export default Navbar;