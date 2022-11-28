import React from 'react';
import logo from '../assest/images/white-logo.png';
import { Route, Routes, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './Style.css';

export default function Header() {
    return (
        <>
        {/* <header className='siteheader py-3'>
            <div className="container">
                <div className="leftRightWrap">
                    <div className="leftPart">
                        <Link to="/"><img src="https://www.e2msolutions.com/wp-content/uploads/2022/04/e2m-solutions-logo.png" alt="" /></Link>
                    </div>
                    <div className="rightPart">
                        <nav>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>                
            </div>
        </header> */}
        <header className="siteHeader">
            <div className="container">
                <div className="headerWrap">
                    <div className="headerLogo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />;
                        </Link>
                    </div>
                    <div className="headerMenu">
                        <ul>                            
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                            <li><NavLink to="/contact">Contact Us</NavLink></li>                            
                        </ul>                    
                    </div>
                </div>
            </div>
        </header>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
    );
}
