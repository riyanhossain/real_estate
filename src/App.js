import React, { createContext } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import home1 from "./Images/grid1.png";
import rec1 from "./Images/Rectangle1.png";
import rec2 from "./Images/Rectangle2.png";
import rec3 from "./Images/Rectangle3.png";
import rec4 from "./Images/Rectangle4.png";
import rec5 from "./Images/Rectangle5.png";
import rec6 from "./Images/Rectangle6.png";
import rec7 from "./Images/Rectangle7.png";
import grid1 from "./Images/grid1.png";
import grid2 from "./Images/grid2.png";
import grid3 from "./Images/grid3.png";
import grid4 from "./Images/grid4.png";
import grid5 from "./Images/grid5.png";
import grid6 from "./Images/grid6.png";
import About from "./components/About/About";
export const dataContext = createContext();
function App() {
  const houses = [
    {
      id: 0,
      title: "Mato House",
      image: grid1,
      images: [ rec1, rec2, rec3, rec4, rec5 , rec6, rec7],
      car: 3,
      bath: 2,
      bed: 3,
      kitchen: 1,
      build: 2011,
      Description: {
        short:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit non.Lorem ipsum dolor.",
        long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum aspernatur ipsa! Corporis iure modi architecto nam labore similique. Nesciunt nam provident voluptate, mollitia quam reiciendis magnam ea accusantium. Vitae provident nisi deleniti. Recusandae eligendi voluptates, nam sequi, adipisci ipsam quibusdam quaerat consectetur magni inventore aliquid sint ipsum quos delectus eum laudantium expedita exercitationem. Alias fugiat recusandae eaque repellat quia.",
      },
      price: "$450000",
      address: "3002 Foster Ave, Brooklyn, NY 11210, USA",
      space: "$2,800/sq ft",
    },
    {
      id: 1,
      title: "Envo House",
      image: grid2,
      images: [ rec1, rec2, rec3, rec4, rec5 , rec6, rec7],
      car: 4,
      bath: 3,
      bed: 3,
      kitchen: 2,
      build: 2011,
      Description: {
        short:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit non.Lorem ipsum dolor.",
        long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum aspernatur ipsa! Corporis iure modi architecto nam labore similique. Nesciunt nam provident voluptate, mollitia quam reiciendis magnam ea accusantium. Vitae provident nisi deleniti. Recusandae eligendi voluptates, nam sequi, adipisci ipsam quibusdam quaerat consectetur magni inventore aliquid sint ipsum quos delectus eum laudantium expedita exercitationem. Alias fugiat recusandae eaque repellat quia.",
      },
      price: "$450000",
      address: "3002 Foster Ave, Brooklyn, NY 11210, USA",
      space: "$2,800/sq ft",
    },
    {
      id: 2,
      title: "Roatolo House",
      image: grid3,
      images: [ rec1, rec2, rec3, rec4, rec5 , rec6, rec7],
      car: 1,
      bath: 1,
      bed: 2,
      kitchen: 1,
      build: 2011,
      Description: {
        short:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit non.Lorem ipsum dolor.",
        long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum aspernatur ipsa! Corporis iure modi architecto nam labore similique. Nesciunt nam provident voluptate, mollitia quam reiciendis magnam ea accusantium. Vitae provident nisi deleniti. Recusandae eligendi voluptates, nam sequi, adipisci ipsam quibusdam quaerat consectetur magni inventore aliquid sint ipsum quos delectus eum laudantium expedita exercitationem. Alias fugiat recusandae eaque repellat quia.",
      },
      price: "$450000",
      address: "3002 Foster Ave, Brooklyn, NY 11210, USA",
      space: "$2,800/sq ft",
    },
    {
      id: 3,
      title: "Halo House",
      image: grid4,
      images: [ rec1, rec2, rec3, rec4, rec5 , rec6, rec7],
      car: 3,
      bath: 3,
      bed: 4,
      kitchen: 2,
      build: 2011,
      Description: {
        short:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit non.Lorem ipsum dolor.",
        long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum aspernatur ipsa! Corporis iure modi architecto nam labore similique. Nesciunt nam provident voluptate, mollitia quam reiciendis magnam ea accusantium. Vitae provident nisi deleniti. Recusandae eligendi voluptates, nam sequi, adipisci ipsam quibusdam quaerat consectetur magni inventore aliquid sint ipsum quos delectus eum laudantium expedita exercitationem. Alias fugiat recusandae eaque repellat quia.",
      },
      price: "$450000",
      address: "3002 Foster Ave, Brooklyn, NY 11210, USA",
      space: "$2,800/sq ft",
    },
    {
      id: 4,
      title: "Hellfire House",
      image: grid5,
      images: [ rec1, rec2, rec3, rec4, rec5 , rec6, rec7],
      car: 5,
      bath: 3,
      bed: 4,
      kitchen: 3,
      build: 2011,
      Description: {
        short:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit non.Lorem ipsum dolor.",
        long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum aspernatur ipsa! Corporis iure modi architecto nam labore similique. Nesciunt nam provident voluptate, mollitia quam reiciendis magnam ea accusantium. Vitae provident nisi deleniti. Recusandae eligendi voluptates, nam sequi, adipisci ipsam quibusdam quaerat consectetur magni inventore aliquid sint ipsum quos delectus eum laudantium expedita exercitationem. Alias fugiat recusandae eaque repellat quia.",
      },
      price: "$450000",
      address: "3002 Foster Ave, Brooklyn, NY 11210, USA",
      space: "$2,800/sq ft",
    },
    {
      id: 5,
      title: "Wallbroke House",
      image: grid6,
      images: [ rec1, rec2, rec3, rec4, rec5 , rec6, rec7],
      car: 3,
      bath: 4,
      bed: 5,
      kitchen: 3,
      build: 2011,
      Description: {
        short:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit non.Lorem ipsum dolor.",
        long: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum aspernatur ipsa! Corporis iure modi architecto nam labore similique. Nesciunt nam provident voluptate, mollitia quam reiciendis magnam ea accusantium. Vitae provident nisi deleniti. Recusandae eligendi voluptates, nam sequi, adipisci ipsam quibusdam quaerat consectetur magni inventore aliquid sint ipsum quos delectus eum laudantium expedita exercitationem. Alias fugiat recusandae eaque repellat quia.",
      },
      price: "$450000",
      address: "3002 Foster Ave, Brooklyn, NY 11210, USA",
      space: "$2,800/sq ft",
    },
  ];
  return (
    <dataContext.Provider value={houses}>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/mato" element={<Home1 />} /> */}
            <Route path="/:id" element={<About/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </dataContext.Provider>
  );
}

export default App;
