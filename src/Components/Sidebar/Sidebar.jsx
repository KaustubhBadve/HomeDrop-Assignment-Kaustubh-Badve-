import React from 'react'
import "./Sidebar.css"
import { TiThLarge } from "react-icons/ti";


const Sidebar = () => {
  return (
    <div id='sidebar_Outer'>
       <div>
        <span><i class="fa-solid fa-house"></i></span>
        <span>Overview</span>
       </div>

       <div>
        <span><i class="fa-solid fa-cart-shopping"></i></span>
        <span>Sales</span>
       </div>

       <div>
        <span><i class="fa-solid fa-cube"></i></span>
        <span>Purchase</span>
       </div>

       <div>
        <span><TiThLarge/></span>
        <span>Inventory</span>
       </div>

       <div>
       <span><TiThLarge/></span>
        <span>Marketing</span>
       </div>

       <div>
        <span><i class="fa-solid fa-chart-simple"></i></span>
        <span>Analytics</span>
       </div>

       <div>
        <span><i class="fa-solid fa-people-roof"></i></span>
        <span>Staff</span>
       </div>   
    </div>
  )
}

export default Sidebar


