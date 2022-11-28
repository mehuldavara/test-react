import React from 'react';
import blue_logo from '../assest/images/blue-logo.png';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Footer() {
  // const banner = {
  //   backgroundColor: "#f5f5f5",
  // }
  return (  
    <>      
    {/* <footer className='siteFooter py-3 text-center' style={banner}>
      <div className="container">
        <p className='my-0'>Copy right @ My test site.</p>
      </div>
    </footer> */}

    <footer className="siteFooter">
      <div className="firstfooter">
          <div className="container">
              <div className="fistFooterWrap">
                  <div className="footerLogo">
                    <Link to="/">
                        <img src={blue_logo} alt="Logo" />
                    </Link>
                  </div>
                  <div className="footerMenu">
                    <ul>                            
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>                            
                    </ul>                   
                  </div>
              </div>
          </div>
      </div>
      <div className="secondFooter">
          <div className="container">
              <p>©2022 Pledge Financial LLC</p>
          </div>
      </div>
    </footer>
</>
  )
}
