import React from 'react'
import './Youtub.css';
export default function Youtube() {
const videos = [
    {
      title: "Build Your First Blockchain App",
      channel: "freeCodeCamp",
      views: "2.2M views • 3 days ago",
      img: "https://i.ytimg.com/vi/gyMwXuJrbJQ/hqdefault.jpg",
    },
    {
      title: "Blockchain Developer Roadmap 2026",
      channel: "Apna College",
      views: "1.6M views • 1 week ago",
      img: "https://i.ytimg.com/vi/SSo_EIwHSd4/hqdefault.jpg",
    },
    {
      title: "Web3 Full Course for Beginners",
      channel: "CodeWithHarry",
      views: "900K views • 2 weeks ago",
      img: "https://i.ytimg.com/vi/M576WGiDBdQ/hqdefault.jpg",
    },
    {
      title: "Smart Contract Security Best Practices",
      channel: "EatTheBlocks",
      views: "450K views • 1 month ago",
      img: "https://i.ytimg.com/vi/gyMwXuJrbJQ/hqdefault.jpg",
    },
  ];

  return (
        
         <div className="algo-app">
      {/* HEADER */}
      <header className="header">
        <div className="left-section">
       
          <div className="logo">
            <span className="play-icon">▶</span>
            <span className="logo-text">Algo</span>
          </div>
        </div>

        

      
      </header>

      <div className="main-container">
        {/* VIDEO SECTION */}
        <div className="video-main">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/T0KDofxLb4A"
              title="Algo video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          <h1 className="video-title">
            Learn Blockchain, Solidity, and Full Stack Web3 Development
          </h1>

          <div className="video-meta">
            <p className="views">1.24M views • 2 days ago</p>
            
           
          </div>
        </div>

        {/* RECOMMENDATIONS SIDEBAR */}
        <div className="recommendations">
          <h3 className="section-title">Up next</h3>
          {videos.map((video, index) => (
            <div key={index} className="recommend-card">
              <div className="thumbnail-container">
                <img src={video.img} alt={video.title} />
              </div>
              <div className="card-info">
                <p className="card-title">{video.title}</p>
                <p className="channel-name">{video.channel}</p>
                <p className="card-views">{video.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     
  );
}