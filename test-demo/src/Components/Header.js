import React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './Style.css';

export default function Header() {
    return (
        <>
        <header className='siteheader py-3'>
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
        </header>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
    );
}
