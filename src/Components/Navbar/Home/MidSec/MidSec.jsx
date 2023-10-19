import React from "react";
import "../../../Navbar/Navbar.css";
import "./MidSec.css";
import { useNavigate } from "react-router-dom";
// import bull from "../../../Images/My FPrec Competition Black and white-02 - Copy.png";
import startimage from "../../../../assets/startimage.svg";
// flex flex-col items-center justify-center mainContent
const MidSec = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center justify-center mainContent"
      style={{ height: "120vh" }}
    >
      <div
        className="text-center"
        style={{ marginTop: "10%", height: "100vh" }}
      >
        {/* <img className="w-full max-w-lg" src={bull} alt="" /> */}
        <p className="text-white TESTIMONIALS ">Your Capital, Your Pocket</p>
        <h1
          className="font-bold mid-para text-white"
          style={{ fontSize: "50px" }}
        >
          World's First Forex Competition 30% Traders Are Profitable No Daily Or Maximum Drawdown
          {/*<div className="s-h-number">4.9</div>
          <img
            src={startimage}
            alt=""
            className="star-img"
            style={{ height: "width: 45%;" }}
  /> */}
        </h1> 
        {/* <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
          Awaits You
        </h1> */}
        {/* <div className="starthead"> */}
        {/* <div className="s-h-title"></div> */}
        {/* </div> */}
         <div className="flex flex-col md:flex-row justify-center mt-6">
          <button onClick={() => {navigate("/login")}}
           
            className="text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded mb-2 md:mb-0 mr-0 md:mr-4 transition duration-300 ease-in-out btns"
          >
            Start Now
          </button>

        </div> 
      </div>
    </div>
  );
};

export default MidSec;
