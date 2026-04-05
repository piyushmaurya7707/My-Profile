import React from "react";
import "./Content.css";

export default function Content() {
  return (
    <div className="content">
      <header className="content-header">
        <h1>Node.js Streams</h1>
        <p className="subtitle">
          Handle large amounts of data efficiently with continuous data flow
        </p>
      </header>

      <section className="intro">
        <p>
          Node.js Streams are one of the most powerful features in Node.js. 
          They allow you to process data in <strong>chunks</strong> rather than 
          loading everything into memory at once — making them perfect for 
          handling files, network requests, and real-time data.
        </p>
      </section>

      <section className="benefits">
        <h2>Why Use Streams?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <span className="icon">📥</span>
            <h3>Introduction to Node.js</h3>
            <p>Process data in small chunks instead of loading entire files into memory.</p>
          </div>
          <div className="benefit-card">
            <span className="icon">⚡</span>
            <h3>High Performance</h3>
            <p>Excellent for large files, videos, logs, and API responses.</p>
          </div>
          <div className="benefit-card">
            <span className="icon">🔄</span>
            <h3>Pipelining</h3>
            <p>Easily connect multiple operations using <code>.pipe()</code>.</p>
          </div>
          <div className="benefit-card">
            <span className="icon">🌊</span>
            <h3>Backpressure Support</h3>
            <p>Automatically handles data flow control between fast and slow processes.</p>
          </div>
        </div>
      </section>

      <section className="usage">
        <h2>Getting Started with Streams</h2>
        <p>
          Streams are part of Node.js core. You can access them directly:
        </p>
        <div className="code-block">
          <pre>
            <code>{`const { Readable, Writable, Transform, Duplex } = require('stream');
// or using ES modules
import { Readable, Writable, Transform } from 'stream';`}</code>
          </pre>
        </div>
      </section>

      <section className="types">
        <h2>Four Main Types of Streams</h2>
        <ul className="stream-types">
          <li><strong>Readable</strong> — For reading data (e.g., fs.createReadStream)</li>
          <li><strong>Writable</strong> — For writing data (e.g., fs.createWriteStream)</li>
          <li><strong>Transform</strong> — Read + modify + write (e.g., compression, encryption)</li>
          <li><strong>Duplex</strong> — Both readable and writable (e.g., TCP sockets)</li>
        </ul>
      </section>
    </div>
  );
}