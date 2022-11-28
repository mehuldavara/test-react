import React from 'react'

export default function Home() {
  const banner = {
      color: "white",
      backgroundColor: "#4d8db4",
      padding: "10px",
      fontFamily: "Arial"
  }
  return (
    <section className='homePage text-center' style={banner}>
      <div className="container">
        <h1 className='my-0'>Home</h1>
      </div>
    </section>
  )
}
