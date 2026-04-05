import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

import { Link } from "react-router-dom";

export default function Nodejs() {
  return (
    <Link to="/Layout-nodejs">
      <div className="container">
        {/* <Sidebar /> */}
        <Content />
      </div>
    </Link>
  );
}