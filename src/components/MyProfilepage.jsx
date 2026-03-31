import React from "react";
import myImage from "../assets/image.png";
import "./MyProfilepage.css";

function Sidebar() {
  return (
    <div>
      {/* Sidebar */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="sidebar"
      >
        <div className="offcanvas-header flex-column align-items-start">
          
          <div className="container profile-container">
            
            <div className="cover-photo"></div>

            <img src={myImage} className="profile" alt="profile" />

            <div className="profile-name">Piyush Maurya</div>

            <p className="about-text">
              This is my project file
            </p>

          </div>

          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-2"
            data-bs-dismiss="offcanvas"
          ></button>

        </div>

        <div className="offcanvas-body">
          <ul className="list-group">
            <li className="list-group-item">Home</li>
            <li className="list-group-item">About</li>
            <li className="list-group-item">Projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;