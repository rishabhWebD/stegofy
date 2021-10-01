import React from 'react';
import logo1 from '../svg/Group 31.svg'


const Navbar = ()=>{
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo1}/></a>
    
    <div class="collapse navbar-collapse marg" id="navbarSupportedContent">
      <ul class="navbar-nav  ml-auto  mb-2 mb-lg-0 ">
        <li class="nav-item mx-3 nv">
          <a class="nav-link active" aria-current="page" href="#">Pricing</a>
        </li>
        <li class="nav-item mx-3 nv ">
          <a class="nav-link" href="#">FAQs</a>
        </li>
        <li class="nav-item mx-3 nv">
          <a class="nav-link" href="#">Our Journey</a>
        </li>
        <li class="nav-item mx-3 nv">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        <li class="nav-item mx-3 ">
          <button className="btn btn-primary bit">Verify</button>
          </li> 
          <li class="nav-item mx-3 ">
          <button className="btn bit1">Login</button>
          </li> 
       </ul>
          
     
    </div>
  </div>
</nav>
         
        </>
    )
}


export default Navbar