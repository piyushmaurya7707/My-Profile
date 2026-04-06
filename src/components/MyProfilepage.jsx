
import myImage from "../assets/unnamed.jpg";
import "./MyProfilepage.css";
import github from "../assets/github.png";
import linkdin from "../assets/linkedin.png";
import telegram from "../assets/telegram.png";
import youtube from "../assets/youtube.png";
import folder from "../assets/folder.png";
import file from "../assets/file.png";
import { Link } from "react-router-dom";
function Sidebar() {
 
  
  return (
    <div
      className="offcanvas offcanvas-start custom-sidebar"
      tabIndex="-1"
      id="sidebar"
    >
      {/* HEADER */}

      <div className="cover-photo"></div>

      <div className="profile-section">
        <img
          src={myImage}
          className="profile-img"
          alt="Piyush Maurya"
        />

        <div className="profile-info">
          <h4 className="profile-name">Algo</h4>

        </div>
      </div>

      <button
        type="button"
        className="btn-close close-btn"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>


      {/* BODY */}
      <div className="offcanvas-body">
        <nav className="sidebar-nav">
          <ul className="nav-item">
            <img src={github} alt="GitHub" className="icon" href="https://github.com" />
            <span>GitHub</span>
          </ul>

          <ul className="nav-item">
            <img src={linkdin} alt="LinkedIn" className="icon" href="https://linkedin.com" />
            <span>LinkedIn</span>
          </ul>

          <ul className="nav-item">
            <img src={telegram} alt="Telegram" className="icon" href="https://telegram.org" />
            <span>Telegram</span>
          </ul>

          <ul className="nav-item">
            <img src={youtube} alt="YouTube" className="icon" href="https://www.youtube.com/@GS-Algo" />
            <span>YouTube</span>
          </ul>
          </nav>

    {/* project 1*/ }
<div
  className="nav-item"
  data-bs-toggle="collapse"
  data-bs-target="#html"
>
  <img src={folder} className="icon" />
  <span>HTML and CSS Projects</span>
</div>


<div id="html" className="collapse">

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 1</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 2</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 3</span>
          </div>
        </div>

        <div id="folderhtml" className="collapse">
  <div className="nav-item sub">Project 2</div>
</div>



{/*project 2*/}
<div
  className="nav-item"
  data-bs-toggle="collapse"
  data-bs-target="#javascript"
>
  <img src={folder} className="icon" />
  <span>JavaScript Projects</span>
</div>


<div id="javascript" className="collapse">
          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 1</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 2</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 3</span>
          </div>
        </div>

        <div id="folderhtml" className="collapse">
  <div className="nav-item sub">Project 2</div>
</div>

{/*project 3*/}
<div
  className="nav-item"
  data-bs-toggle="collapse"
  data-bs-target="#React"
>
  <img src={folder} className="icon" />
  <span>React Projects</span>
</div>


<div id="React" className="collapse">
        
        <Link to="/todo-list">
          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Todo List</span>
          </div>
        </Link>
          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 2</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 3</span>
          </div>
        </div>

        <div id="folderhtml" className="collapse">
  <div className="nav-item sub">Project 2</div>
</div>


{/*project 4*/}
<div
  className="nav-item"
  data-bs-toggle="collapse"
  data-bs-target="#Angular"
>
  <img src={folder} className="icon" />
  <span>Angular Projects</span>
</div>


<div id="Angular" className="collapse">
          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 1</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 2</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 3</span>
          </div>
        </div>

        <div id="folderhtml" className="collapse">
  <div className="nav-item sub">Project 2</div>
</div>


{/*project 5*/}
<div
  className="nav-item"
  data-bs-toggle="collapse"
  data-bs-target="#Blazor"
>
  <img src={folder} className="icon" />
  <span>Blazor Projects</span>
</div>


<div id="Blazor" className="collapse">
          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 1</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 2</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 3</span>
          </div>
        </div>

        <div id="folderhtml" className="collapse">
  <div className="nav-item sub">Project 2</div>
</div>

{/*project 6*/}
<div
  className="nav-item"
  data-bs-toggle="collapse"
  data-bs-target="#Node.js"
>
  <img src={folder} className="icon" />
  <span>Node.js Projects</span>
</div>


<div id="Node.js" className="collapse">
          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 1</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 2</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 3</span>
          </div>
        </div>

        <div id="folderhtml" className="collapse">
  <div className="nav-item sub">Project 2</div>
</div>
{/*project 7*/}
<div
  className="nav-item"
  data-bs-toggle="collapse"
  data-bs-target="#.Net"
>
  <img src={folder} className="icon" />
  <span>.NET Projects</span>
</div>


<div id=".Net" className="collapse">
          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 1</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 2</span>
          </div>

          <div className="nav-item sub">
            <img src={file} alt="" className="icon" />
            <span>Project 3</span>
          </div>
        </div>

        <div id="folderhtml" className="collapse">
  <div className="nav-item sub">Project 2</div>
</div>







      </div>


    </div>


  );
}


export default Sidebar;