import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home1 from "./components/PAGE2/Home1/Home1";
import Home2 from "./components/PAGE2/Home2/Home2";
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mato" element={<Home1/>} />
          <Route path="/envo" element={<Home2/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
