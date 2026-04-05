import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  // You can make "Streams" active by default or use React Router + useLocation later
  const currentTopic = "Streams";

  const topics = [
    { name: "Async Programming", icon: "⚡" },
    { name: "Promises in Node.js", icon: "📌" },
    { name: "Exception Handling", icon: "🛡️" },
    { name: "NPM & Packages", icon: "📦" },
    { name: "Streams", icon: "🌊" },
    { name: "Buffers", icon: "📄" },
    { name: "File System (fs)", icon: "📁" },
    { name: "Events & EventEmitter", icon: "🎯" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Node.js Mastery</h2>
        <p>Core Concepts</p>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {topics.map((topic, index) => (
            <li 
              key={index}
              className={`sidebar-item ${topic.name === currentTopic ? "active" : ""}`}
            >
              <span className="icon">{topic.icon}</span>
              <span className="topic-name">{topic.name}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <small>More topics coming soon...</small>
      </div>
    </div>
  );
}