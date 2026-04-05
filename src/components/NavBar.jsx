import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import github from "../assets/github.png";
import linkdin from "../assets/linkedin.png";
import telegram from "../assets/telegram.png";
import youtube from "../assets/youtube.png";
import Home from "../assets/home.png";
export default function NavBar() {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
  <div className="container-fluid">
      {/* 🔘 Button */}
      <button
  className="btn btn-primary ms-2"
  data-bs-toggle="offcanvas"
  data-bs-target="#sidebar"
>
  ☰
</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="Home" aria-current="page"><img src={Home} alt="Home" className="nav-icon"/></Link>
        </li>
       <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
     
        
      </ul>

  <ul className="social-icons d-flex align-items-center mb-0">
  <li className="nav-item">
    <img src={github} alt="GitHub" className="nav-icon" />
  </li>
  <li className="nav-item">
    <img src={linkdin} alt="LinkedIn" className="nav-icon" />
  </li>
  <li className="nav-item">
    <img src={telegram} alt="Telegram" className="nav-icon" />
  </li>
  <li className="nav-item">
    <img src={youtube} alt="YouTube" className="nav-icon" />
  </li>
</ul>




      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
    </>
  );
  }