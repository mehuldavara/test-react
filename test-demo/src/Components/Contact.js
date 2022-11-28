import React from 'react'

export default function Contact() {
  const banner = {
    color: "white",
    backgroundColor: "#4d8db4",
    padding: "10px",
    fontFamily: "Arial"
  }
  
  return (
    <section className='contactPage text-center' style={banner}>
      <div className="container">
        <h1 className='my-0'>Contact us</h1>
      </div>
    </section>
  )
}
