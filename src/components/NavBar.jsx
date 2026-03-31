import React from 'react'
import './NavBar.css';
export default function NavBar() {
  return (
    <>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
      {/* 🔘 Button */}
      <button
        className="btn btn-primary m-3"
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
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
       <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
     
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
  }