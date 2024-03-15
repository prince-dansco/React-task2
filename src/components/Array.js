import React, { useState } from "react";
import img1 from "../components/image/ship.jpg";
import img2 from "../components/image/image.jpg";
import img3 from "../components/image/car4.webp";
import ConditinalRendering from "./conditinalRendering";



const Array = () => {
  const [showc, setShowc] = useState(false);

  const handlCLick=()=>{
  setShowc(true)
  }
  const items = [
    {
      image: img1,
      title: "Royer carribbean to use starlink internet",
      description: "After spaceX announce its starlink meritime service last month it was only a matter of time before some household name in..",
      text: "Read Article",

     
    },
    {
      image: img2,
      title: "Nikola, Lucid tries to raise more cash",
      description: "Two EV manufacturer are seeking cash infusion this week to bring their delayed vehicles to market. Nikola,a phoenix-base",
      text: "Read Article",
    },
    {
      image: img3,
      title: "Tesla owner seeks class action over Plantom braking",
      description: "A Tesla model 3 owner who filed a lawsuit against  the automaker Friday alleging  unintended braking is seeking class",
      text: "Read Article",
    },
  ];

  return (
    <div className="container">
      {items.map((item, index) => (
        <div key={index} className="card">
          <img src={item.image} alt="image" />
          <div className="card-details">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button  className="" onClick={handlCLick}>{item.text}</button>
              <span className="click" onClick={handlCLick}>show contional rendering
                {showc ? <ConditinalRendering /> : null}
              </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Array;
