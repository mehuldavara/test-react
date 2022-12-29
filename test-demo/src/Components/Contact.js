import React, { useState } from 'react';
import right_side_arrow from '../assest/images/right-side-arrow.png';
import banner_image from '../assest/images/contact.jpeg';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';

export default function Contact() {
const banner_part = {    
  backgroundImage: `url(${banner_image})`,
}
const numberColor = {
  color:'#000'
} 

// Add, Update, Delete :- Start
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
// Add, Update, Delete :- End

const [num, setNum] = useState();
const [moves, setMoves] = useState();

useEffect(() => {
  async function getDatas(){
    const ress = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
    setMoves(ress.data.moves.length);
  }

  getDatas();
}

)


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

    <div className='dropDown'>
      <div className="container">
        <h1>Yoy have select <span style={numberColor}>{num}</span> value</h1>
        <h2>Yoy have select <span style={numberColor}>{moves}</span> value</h2>
        <select value={num} onChange={(e) => {setNum(e.target.value)}}>
          <option value="1">1</option>
          <option value="11">11</option>
          <option value="31">31</option>
          <option value="41">41</option>
          <option value="51">51</option>
          <option value="61">61</option>
        </select>
      </div>
    </div>

    <div className='contactForm py-5'>
      <div className="container">

          <div className='formInputValue'>
            <input value={name} onChange={(e)=>setName(e.target.value)}/>
            {!show ? <button className='addbtn bttn' onClick={handleAdd}>Add</button>:
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
