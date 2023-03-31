import React from 'react'
import '../../App.css'

function Product() {
  return (
      <h1 className="products" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/img-1.jpg'})` }}>PRODUCTS</h1>
  )
}

export default Product;
