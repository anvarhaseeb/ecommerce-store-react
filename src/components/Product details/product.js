import React,{useEffect, useState} from 'react'
import './product.css'
import { getProductsId } from '../../ApiService/api';
import { Link, useParams } from 'react-router-dom'

function ProductDetails() {

const {id} =useParams();
const [productdetails,setProductdetails]=useState({})

  useEffect(() => {
   
    const fetchProductDetails= async()=>{
      const data =await getProductsId(id)
      setProductdetails(data)
    }
    fetchProductDetails()
  }, [id])
  
  const handleBuying =()=>{
    window.confirm("The product is out of stock !")
  }

  return (
    <div className='product-details-container'>
      <img src={productdetails.image} alt=''className='image'/>
      <div className='product-info'>
        <h2 className='product-title'>
           {productdetails.title}
        </h2>
        <p className='product-description'>{productdetails.description}</p>
        <p className='product-price'>${productdetails.price}</p>

        <button className='buynow-btn' onClick={handleBuying}>Buy Now</button>
        <Link to='/'><button className='goback-btn'>Go back</button></Link>
        
      </div>
    </div>
  )
}

export default ProductDetails
