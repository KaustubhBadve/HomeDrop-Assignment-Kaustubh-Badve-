import React from 'react'
import Navbar1 from '../Components/Navbar1'
import Products from '../Components/Products'
import Sidebar from '../Components/Sidebar'
import "./Homepage.css"
const Homepage = () => {
  return (
    <div id='main'>
        <Navbar1/>
        <div id='belowNavbar'>
          <Sidebar/>
          <Products/>
        </div>
    </div>
  )
}

export default Homepage