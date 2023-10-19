import React from "react";
import { Link, Router, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Navbar.css";
import logo from "../Images/My Forex Competition p-05.png";
import flag from "../Images/united-kingdom.png";
// import Example from "../../Pages/Siginup/Siginup";
const LoginNavbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [user, setUser] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* style={{ backgroundColor: "#050628" }}  */}

      <nav
        style={{ backgroundColor: "#0570A6" }}
        className="nav flex flex-wrap  items-center justify-between px-6"
      >
        <div className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <div style={{ width: "200px" }} className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>

        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          htmlFor="menu-btn"
          onClick={toggleMenu}
        >
          <span className="navicon bg-grey-darkest flex items-center relative">
            <span className="h-0.5 w-4 bg-white transition-all duration-300 transform origin-left"></span>
            <span className="h-0.5 w-4 bg-white transition-all duration-300 transform origin-left mt-1"></span>
            <span className="h-0.5 w-4 bg-white transition-all duration-300 transform origin-left mt-1"></span>
          </span>
        </label>

        <ul
          className={`menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto ${
            isMenuOpen ? "" : "hidden"
          }`}
          id="menu"
        >
                      <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            <Link to="/">
              Home
              <i className="fa ml-2" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="md:border-none mt-2 relative mr-4 text-white font-bold transition duration-300 ease-in-out">
            <a href="/Howworks">
              How it works{" "}
              <i className="fa fa-caret-down ml-2" aria-hidden="true"></i>
            </a>
            <ul className="submenu absolute left-0 mt-2 bg-white shadow-lg rounded opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible">
              <li className="py-2 px-4 hover:bg-gray-100">
                <a href="/">Rapid</a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-100">
                <a href="/">Evaluation</a>
              </li>
              <li className="py-2 px-4 hover:bg-gray-100">
                <a href="/">Accelerated</a>
              </li>
            </ul>
          </li>
          <li className="border-t md:border-none mt-2 mr-4 text-white font-bold">
            <Link to="/FAQ">
              FAQ
              {/* FAQ <i className="fa fa-caret-down ml-2" aria-hidden="true"></i> */}
            </Link>
          </li>
          {/* Testimonials 
          <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            <Link to="/Testimonials">
              Testimonials{" "}
              <i className="fa fa-caret-down ml-2" aria-hidden="true"></i>
            </Link>
          </li>
        */}
          {/* Trading */}

          <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
            <Link to="/Aboutus">
              About us
              <i className="fa fa-caret-down ml-2" aria-hidden="true"></i>
            </Link>
          </li>

          {/* Client Area */}
          <li
            className="text-white font-bold hover:text-blue-500 "
            style={{ fontSize: "16px", color: "blue" }}
          >
            <Link to="/OurDocument">
              Client Area{" "}
              {/* <i className="fa fa-caret-down ml-2" aria-hidden="true"></i> */}
            </Link>
          </li>
          {/* Contact */}
          {/* <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
                        <Link to="/OurDocument">Contact <i className="fa fa-caret-down ml-2" aria-hidden="true"></i></Link>
                    </li> */}
          <li className="mt-2 mr-4 text-white">
            <span className="flex font-bold ">
              <img
                className="mr-2"
                width={"20px"}
                height={"20px"}
                src={flag}
                alt=""
              />
              EN
            </span>
          </li>
          {/* <button>Sign in</button> */}
          {/* <Example /> */}{" "}
          <Link to="/Signup">
            <button
              type="button"
              className="self-end text-black font-medium text-sm px-5 py-2.5 mr-2 focus:outline-none dark:focus:ring-blue-800  hover:text-white transition duration-300 ease-in-out"
              variant="primary"
            >
              Register
            </button>
          </Link>
          {/* <li className="border-t md:border-none mt-2 mr-4 text-white font-bold hover:text-blue-500 transition duration-300 ease-in-out">
                        <i className="fa fa-briefcase" aria-hidden="true"></i>
                    </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default LoginNavbar;
