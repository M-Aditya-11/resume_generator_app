import React from "react";
import './Header.css'
import { assets } from '../../assets/assets.js'

const Header = () => {
    return (
        <div className="hero">
            <div className="hero-top-left">
                <div className="hero-top-left-heading">
                    <p>Build Resume</p>
                    <p>that</p>
                    <p>get interviews</p>
                </div>
                <div className="hero-top-right-image">
                    <img src={assets.hero_image_top} alt="" className="hero-top-image" />
                </div>
            </div>
        </div>
    )
}

export default Header;