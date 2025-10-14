import React from "react";
import './Header.css'
import { assets } from '../../assets/assets.js'

const Header = () => {
    return (
        <div className="header">
            <div className="hero-top">
                <div className="hero-top-left-heading">
                    <p>Build Resume</p>
                    <p>that</p>
                    <p>get interviews.</p>
                </div>
                <div className="hero-top-right-image">
                    <img src={assets.hero_image_top} alt="" className="hero-top-image" />
                </div>
            </div>
            <button className="shine-btn">Create a Resume</button>
            <div className="hero-bottom">
                <div className="hero-bottom-left-image">
                    <img src={assets.hero_image_bottom} alt="" className="hero-bottom-image" />
                </div>
                <div className="hero-bottom-right-heading">
                    <p>Grow your story</p>
                    <p>with clean resumes</p>
                    <p>and thoughtful templates.</p>
                </div>

            </div>
        </div>
    )
}

export default Header;