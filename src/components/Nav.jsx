import React from "react";
import Glass from "../img/glass.svg"
import Logo from "../img/Logo.svg"
const Nav = () =>{

    return(
    <nav class="navbar navbar-expand-lg">
       <div class="container-fluid py-2">
    <a class="navbar-brand col-8" href="#">
        <img src={Logo} className= "Logo"/>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Link</a></li>
          </ul>
        </li>
        <li class="px-1 nav-item">
          <a class="nav-link active" aria-current="page" href="#">Link</a>
        </li>
        <li class="px-1 nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="px-1 nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="px-1 nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="px-1 nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="px-1 nav-item">
        <a class="nav-link" href="#">
          <img src={Glass} alt="" />
            
        </a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )

}
  
  export default Nav;