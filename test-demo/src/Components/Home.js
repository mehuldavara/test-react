import React from 'react'
import right_side_arrow from '../assest/images/right-side-arrow.png';
import banner_image from '../assest/images/home-banner.jpg';
import { Link } from "react-router-dom";

export default function Home() {

  const banner_part = {    
    backgroundImage: `url(${banner_image})`,
  }
  return (
    <>   

    <div className="homeHeroSection" style={banner_part}>
      <div className="container">
          <div className="firstSmallText">we are</div>
          <h1 className="heroMainTitle">Pledge <br/>Financial</h1>
          <Link className="btn" to="/contact">Contact us             
            <img src={right_side_arrow} alt="Logo" />           
          </Link>
      </div>
    </div>
  </>
  )
}
