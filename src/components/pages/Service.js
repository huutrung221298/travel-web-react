import React from 'react'
import '../../App.css';
function Service() {
  return (
    <div>
      <h1 className="services" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img-2.jpg'})` }}>SERVICES</h1>
    </div>
  )
}

export default Service;
