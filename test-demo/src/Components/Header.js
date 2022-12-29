import React from 'react';
import logo from '../assest/images/white-logo.png';
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';

import './Style.css';

export default function Header() {
    return (
        <>        
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
