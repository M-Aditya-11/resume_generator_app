import React from "react";
import './Footer.css'
import { assets } from "../../assets/assets.js";

const Footer = () => {
    return (
        <div className="footer">
            <div className="left">
                <p className="footer-heading">HibiSys</p>
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Send Feedback</p>
            </div>
            <div className="middle">
                <p className="footer-heading">Need help?</p>
                <p>+91 1234567890</p>
                <p>info@hibisys.com</p>
                <p>Site map</p>
            </div>
            <div className="right">
                <p className="footer-heading">Stay Connected!</p>
                <div className="social-media-links">
                    <img src={assets.twitter_icon} alt="" className="social-media-links-icon"/>
                    <img src={assets.linkdin_icon} alt="" className="social-media-links-icon"/>
                    <img src={assets.facebook_icon} alt="" className="social-media-links-icon"/>
                </div>
                <div className="download-btn-playstore">
                    <img src={assets.play_store} alt="" className="download-btn-playstore-playstore"/>
                </div>
                <div className="download-btn-appstore">
                    <img src={assets.app_store} alt="" className="download-btn-appstore-appstore"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;