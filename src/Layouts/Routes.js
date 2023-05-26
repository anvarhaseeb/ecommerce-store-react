import React from 'react'
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import Footer from '../components/footer/Footer'
import Logout from '../components/Logout/logout'
import ProductDetails from '../components/Product details/product'

function RoutesLayout() {
  return (

     <>
     <Router>
        <Header/>

     <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/product/:id' element={<ProductDetails/>}/>

     </Routes>

        <Footer/>
     </Router>
     </>
  )
}



export default RoutesLayout
