import React from 'react'
import "./Navbar1.css"
const Navbar1 = () => {
  return (
    <nav>
        <div id='left_side'>
        <span> <i class="fas fa-bars" id="sidebar"></i></span>
        <img src="https://s3-alpha-sig.figma.com/img/bb98/ef0c/cda114daaa8df34a958543d9e824e6fc?Expires=1665964800&Signature=gFzkTA3JYuR19VeYe2I8oUOvTcgOUxI1mSiX7JXxsuRtEx6BIOxxmNY4y4izz8xIX~ZkIGR56ktGSjXo9NH~QChnH4T7xsflGjCkldFBi8WBztGkhVvvh70Cg-iuB9NdRxeKXusdB5EUnXuwJn4LSJ65OuuJxcFeH3EFau4~7OKUFWcTRlR40Dc9zqAVKmjD7pTbpHSpPZheWcOdSwnfQjynlrjgRJEhmPA0rzwA7xSqHssyZdiPezTOakI2I4yQ6EXEyg2H12jBfIFUmi-pbv-uJJl2raVPUA3FBD5Wpj7Z5J-RXspm~vamIX9c-TlrBZDsBMILGBqWG05Ia495EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
        <div id='brandname'>Swastik Marketing</div> 
        <div id='searchbarWrapper'>
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
        <input type="text" placeholder='Search'/>
        </div>
        </div>

        <div id='right-Side'>

          <div id='connected'><span>•</span> Connected</div>
          <div id='question'><i class="fa-solid fa-question"></i></div>
          <div id='bell'><i class="fa-regular fa-bell"></i></div>
          <div id='kg'>KG</div>
          <div id='downwardsarrow'><i class="fa-solid fa-chevron-down"></i></div>
        </div>
        
    </nav>
  )
}

export default Navbar1