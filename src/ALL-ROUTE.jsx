import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Youtube from "./Other-Resources/Youtub.jsx";
import Nodejs from "./Backend/Nodejs/Nodejs.jsx";

export default function AllRoute() {
  return (
    <>
         <Routes>
      <Route path="/" element={<Home />} />       
      <Route path="/youtube" element={<Youtube />} />
      <Route path="/nodejs" element={<Nodejs />} />
      {/* <Route path="/Layout-nodejs" element={<Nodejs />} /> */}
    </Routes>
    </>
      );  
}