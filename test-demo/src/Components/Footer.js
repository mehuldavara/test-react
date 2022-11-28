import React from 'react'

export default function Footer() {
  const banner = {
    backgroundColor: "#f5f5f5",
  }
  return (        
    <footer className='siteFooter py-3 text-center' style={banner}>
      <div className="container">
        <p className='my-0'>Copy right @ My test site.</p>
      </div>
    </footer>
  )
}
