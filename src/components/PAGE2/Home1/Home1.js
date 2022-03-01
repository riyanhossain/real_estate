import React from "react";
import Footer from "../../Footer/Footer";
import H1S1 from "./H1Section/H1S1";
import H1S2 from "./H1Section/H1S2";
import home1 from '../../../Images/grid1.png'


function Home1() {
  const h1 = 
  {
    id: "mato",
    title: "Mato House",
    image: home1,
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
  };
  return (
    <div>
      <H1S1 h1={h1}/>
      <H1S2 h1={h1}/>
      <Footer/>
    </div>

  );
}

export default Home1;
