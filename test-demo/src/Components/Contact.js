import React, { useState } from 'react';
import right_side_arrow from '../assest/images/right-side-arrow.png';
import banner_image from '../assest/images/contact.jpeg';
import { Link } from "react-router-dom";

export default function Contact() {
const banner_part = {    
  backgroundImage: `url(${banner_image})`,
}

const [name,setName]=useState("")
const [allData,setAllData]=useState([])

const handleAdd=()=>{
  if(name.length!==0){
    setAllData(newData=>[...newData,name])
    setName("")
  }
} 

const handleDelete=(index)=>{
  allData.splice(index,1)
  setAllData([...allData])
}

  return (
    <>
    <div className="homeHeroSection" style={banner_part}>
      <div className="container">
          <div className="firstSmallText">we are</div>
          <h2 className="heroMainTitle">Contact <br/>Us</h2>
          <Link className="btn" to="/contact">Contact us             
            <img src={right_side_arrow} alt="Logo" />           
          </Link>
      </div>
    </div>
    <div className='contactForm'>
      <div className="container">        
          <input value={name} onChange={(e)=>setName(e.target.value)}/>
          <button onClick={handleAdd}>Add</button>   
          {
            allData.map((val,i)=>
            <div>
              <h1>{val}</h1>
              <button className='edit'>Edit</button>
              <button className='delete' onClick={()=>handleDelete(i)}>Delete</button>
            </div>
            )            
          }     
        </div>
    </div>
    </>
  )
}
