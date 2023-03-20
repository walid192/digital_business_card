import React from 'react'
import twitter from '../Images/Twitter.png';
import facebook from '../Images/Facebook.png';
import Github from '../Images/Github.png';
import instagram from '../Images/Instagram.png';
import '../Styles/footerComponent.css'


function Footer() {
    return(
      <div className="wrapper">
      <div className='footer_Container'>
        <img src={twitter} alt="twitter logo" />
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="instagram logo" />
        <img src={Github} alt="github logo" />
      </div>  
      </div>
    );
}


export default Footer;