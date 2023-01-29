import React from 'react'

import './App.css'
import Mui from './MUI/Mui'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import ActionAreaCard from './Pages/Card'
import { BrowserRouter as Router , Route, Routes, Link } from 'react-router-dom';
import ProductDetail from './Pages/ProductDetail'
import AddToCart from './Pages/AddToCart'
import {useSelector} from 'react-redux'
export default function App() {
  let store=useSelector((s)=>{return s.loginUser})
  return (
    <div>
      <Router>
      <Navbar/> 
      <Routes>
           {/* <Route path="/" element={<Product  />} />  */}
          {/* <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/product/:id" element={<ProductDetail />} /> */}
          {/* <Route path='/AddToCard' element={<AddToCard />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/addtocart' element={store===true?<AddToCart />:<p>Sorry..!! Please Login First</p>} />
          <Route path='/productdetail/:id' element={<ProductDetail />}/>
          <Route path='/SignUp' element={<Signup />} />
        
        </Routes>
      </Router>
       {/* <Home/>  */}
       {/* <Login/> */}
      {/* <ActionAreaCard/> */}
      
      
    {/* <Signup/> */}
    </div>
  )
}
