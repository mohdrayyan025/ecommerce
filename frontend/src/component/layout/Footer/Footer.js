import React from 'react'
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css"
const Footer = () => {
  return (
    <footer id='footer'>
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt="playstore"/>
            <img src={appStore} alt="appstore"/>
        </div>
        <div className="midFooter">
            <h1>ShopWithMe</h1>
            <p>Best Quality with Best Services</p>

            <p>Copyrights 2025 &copy; Mohd Rayyan</p>
        </div>
        <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href='https://www.instagram.com'>Instagram</a>
            <a href='https://twitter.com'>Twitter</a>
            <a href='https://www.youtube.com'>Youtube</a>
            
        </div>

    </footer>
    
  )
}

export default Footer