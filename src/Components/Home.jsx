import React from 'react';
import NavBar from './NavBar';
import MovingComponent from "react-moving-text";


const Home = () => {
  return (
    <>
      <NavBar />
      <MovingComponent
        type="fadeInFromLeft"
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
        className="text-center text-2xl font-bold leading-9 tracking-wide text-gray-800 "
      >
        <span className="text-lime-500"> Product </span>
        <span className="text-sky-500"> Requisition </span>
        <span className="text-pink-500"> System</span>
      </MovingComponent>
    </>
  );
};

export default Home;