import React from "react";
import "./Home.css";
import { ReactTyped } from "react-typed";
import Image from "../assets/down.png";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="Background">
      <section className="hero">
        <div className="hero-content">

          <h1>
            You can Learn {" "}
            <span className="highlight">
              <ReactTyped
                strings={[
                  "frontend",
                  "backend",
                  "database",
                  "Logic building ",
                  "and more"
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </span>
          </h1>

          <p>Learning concept take time </p>

          <img src={Image} alt="profile" className="profile" />
        </div>
      </section>

      {/* Cards Section */}
      <section className="projects container dark-section">
        <h2>Other Resource</h2>

        <div className="card-container">
          <Link to="/youtube" >
            <div className="card">


              <h3>YouTube Channel</h3>
              <p>Learn with video</p>


            </div>
          </Link>
          <div className="card">
            <h3>GitHub</h3>
            <p>Get the code here</p>
          </div>

          <div className="card">
            <h3>Telegram</h3>
            <p>Solve your doubts here</p>
          </div>
        </div>
      </section>
      <section className="projects container">
        <h2>Logic Building</h2>

        <div className="card-container">
          <div className="card">
            <h3>Algorithm</h3>
            <p>Use pen and paper for logic building</p>
          </div>

          <div className="card">
            <h3>Data Structure</h3>
            <p>Data stored in memory effectively so we can find it easily</p>
          </div>

          <div className="card">
            <h3>Question DSA</h3>
            <p>Solve try fail then only you learn something new to build logic</p>
          </div>
        </div>
      </section>
      <section className="projects container">
        <h2>Computer Languages</h2>

        <div className="card-container">
          <div className="card">
            <h3>C-Language</h3>
            <p>Does not learn my code Read me like a compiler that make comfortable in Understanding the code</p>
          </div>

          <div className="card">
            <h3>C++ - Language</h3>
            <p>I am an incremented version of c which provided object-orintated concept and more </p>
          </div>

          <div className="card">
            <h3>C#- Language</h3>
            <p>I look like C++ and Java combination and also know as multi-task programming language</p>
          </div>
        </div>
      </section>

      {/* browser languages */}

      <section className="projects container">
        <h2>Browser languages</h2>

        <div className="card-container">
          <div className="card">
            <h3>HTML</h3>
            <p>I am the structure of web page</p>
          </div>

          <div className="card">
            <h3>CSS</h3>
            <p>I design the look and style of web page</p>
          </div>

          <div className="card">
            <h3>Javascript</h3>
            <p>I am brain of the web page</p>
          </div>
        </div>
      </section>
      
      {/* frontend frameworks */}
      <section className="projects container">
        <h2>Frontend Frameworks</h2>
        <div className="card-container">
          <div className="card">
            <h3>React</h3>
            <p>I am a JavaScript library for building user interfaces</p>
          </div>
          <div className="card">
            <h3>Blazor</h3>
            <p>I am a framework for building interactive web UIs using C# instead of JavaScript</p>
          </div>
          <div className="card">
            <h3>Angular</h3>
            <p>I am a platform and framework for building single-page client applications</p>
          </div>
        </div>
      </section>

      {/* backend frameworks */}
      <section className="projects container dark-section">
        <h2>Backend frameworks</h2>

        <div className="card-container">
          <div className="card">
            <h3>.Net</h3>
            <p>I am a free and open-source cross-platform application framework for .NET</p>
          </div>
          <Link to="/nodejs">
            <div className="card">

              <h3>Node.js</h3>

              <p>I am a JavaScript runtime built on Chrome's V8 JavaScript engine</p>

            </div>
          </Link>

          <div className="card">
            <h3>Express.js</h3>
            <p>I am a web application framework for Node.js</p>
          </div>
        </div>
      </section>
</div>



    </>
  );
}





















