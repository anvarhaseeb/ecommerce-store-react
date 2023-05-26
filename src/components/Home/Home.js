import React,{useEffect, useState} from 'react'
import './Home.css'
import { getAllProducts } from '../../ApiService/api'
import { Link } from 'react-router-dom'

function Home() {

const[products,setProducts] =useState([])


useEffect(() => {

  const fetchProducts =async ()=>{
    const data =await getAllProducts();
    setProducts(data)
  }

  fetchProducts()
},[])

  return (
    <div className='product-grid'>
      {
        products.map((product)=>(
          <div className='product'>
        <img src={product.image} alt='alternative'/>
        <h2>{product.title}</h2>
        <p>
          <span className='price'>${product.price}</span>
        </p>
        <Link to={`/product/${product.id}`}>
        <button>Product Details</button></Link>
        
      </div>
        ))
      }
      
    </div>
  )
}

export default Home
