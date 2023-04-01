import React, { useState ,useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import { Link, link } from "react-router-dom";


const Nav = () => {
  
  
  const [show, setShow] = useState(false)
  const [navbar, setNavbar] = useState(false)


  const changeBackgroundcolor =()=>{
    if(window.scrollY >= 20 ){
      setNavbar(true)
    }else{
      setNavbar(false)
    }

    
  }
  window.addEventListener('scroll',changeBackgroundcolor);



  return (
    <>

    <section className="navbar-bg">
    <nav className={` navbar-expand-lg navbar-light ${ navbar ? 'navbar active' : "navbar"} ` } >
      <div className="container" >
        <a className="navbar-brand" href="#">
          Teckzit
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShow(!show)}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <form className="d-flex">
            <button className="btn  btn-style" type="submit">
              Sign Up
            </button>
            <button className="btn  btn-style btn-style-border" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>

     
    </nav>
  </section>


    </>
  )

}



export default Nav;


