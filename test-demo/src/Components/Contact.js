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
const [show,setshow]=useState(false)
const [editIndex,setEditIndex]=useState()

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

const handleEdit=(i)=>{
  setName(allData[i])
  setshow(true)
  setEditIndex(i)
}

const handleUpdate=()=>{
  allData.splice(editIndex,1,name)
  setAllData([...allData])
  setshow(false)
  setName("")
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

    <div className='contactForm py-5'>
      <div className="container">

          <div className='formInputValue'>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            {!show?<button className='addbtn bttn' onClick={handleAdd}>Add</button>:
            <button className='update bttn' onClick={handleUpdate}>Update</button>}
          </div>

          <div className='dataListWrap'>
            {
              allData.map((val,i)=>
              <div className='dataList' key={i}>
                <div className='inputText'>{val}</div>
                <div className='buttonwrap'>
                  <button className='edit' onClick={()=>handleEdit(i)}>Edit</button>
                  <button className='delete' onClick={()=>handleDelete(i)}>Delete</button>
                </div>
              </div>
              )            
            }
          </div>
        </div>
    </div>
    </>
  )
}
