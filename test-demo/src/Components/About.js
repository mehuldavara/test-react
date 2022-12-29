import React, { useState } from 'react';
import right_side_arrow from '../assest/images/right-side-arrow.png';
import banner_image from '../assest/images/about.jpeg';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useEffect } from 'react';

export default function About() {
const banner_part = {    
  backgroundImage: `url(${banner_image})`,
}

  const numberColor = {
    color:'#000'
  }
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [moves, setMoves] = useState();

  useEffect(() => {
    async function getData(){
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      console.log(res.data.name);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getData();
  });

  return (
    <>
    
      <div className="homeHeroSection" style={banner_part}>
        <div className="container">
            <div className="firstSmallText">we are</div>
            <h1 className="heroMainTitle">About <br/>Us</h1>
            <Link className="btn" to="/contact">Contact us             
              <img src={right_side_arrow} alt="Logo" />           
            </Link>
        </div>
      </div>

      <div className="selectPart py-5">
        <div className="container">
          <h2>You have select <span style={numberColor}>{num}</span> value</h2>
          <h2>You have select <span style={numberColor}>{name}</span> value</h2>
          <h2>You have select <span style={numberColor}>{moves}</span> value</h2>
          <select 
              value={num} 
              onChange={(e) =>{
                setNum(e.target.value);
              }}
            >
            <option value="1">1</option>
            <option value="50">50</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      
    </>
  )
}