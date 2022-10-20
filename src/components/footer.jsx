import React from "react";
import Logo from "../img/logoWhite.svg"
const Footer = () =>{
    




    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-top p-md-0 py-5 px-5 border-top">
            
                <div className=" d-flex mx-5 py-5">
                    <a class="navbar-brand col-8 " href="#">
                        <img src={Logo} className= "Logo"/>
                    </a>
                </div>
            <ul className="nav justify-content-end list-unstyled py-5 d-flex">
                <li className="ms-3"><a href="#" className="nav-link px-2 text-muted">Link</a></li>
                <li className="ms-3"><a href="#" className="nav-link px-2 text-muted">Link</a></li>
                <li className="ms-3"><a href="#" className="nav-link px-2 text-muted">Link</a></li>
                <li className="ms-3"><a href="#" className="nav-link px-2 text-muted">Link</a></li>
                <li className="ms-3"><a href="#" className="nav-link px-2 text-muted">Link</a></li>
            </ul>
            <div className="col-12 mx-5">
            <p className="text-left text-muted">© 2019 Fabrx</p>
            </div>
            
        </footer>
    )

}
  
  export default Footer;