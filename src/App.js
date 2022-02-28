import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/PAGE2/About/About";
import About2 from "./components/PAGE2/About/About2";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mato" element={<About/>} />
          <Route path="/envo" element={<About2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
