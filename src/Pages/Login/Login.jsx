// Signup.js
import Button from "react-bootstrap/Button";
import { Link, Router, Routes } from "react-router-dom";
import React, { useState } from "react";
import laptop from "../../assets/siginupformlaptop.svg";
import awardmain from "../../assets/awards.svg";
import "./login.css";
import LoginNavbar from "../../Components/Navbar/LoginNavbar";

// import Awards from "../../Components/awards/Awards";
const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user data to local storage
    localStorage.setItem("userData", JSON.stringify(formData));

    // You can add further logic here, such as sending the data to a server

    alert("Signup successful!");
  };

  return (
    <>
    <LoginNavbar/>
    <div className="form-main">
      <div className="form-wrapper">
        <div className="form-left">
          <div className="left-images">
            <div className="img-one">
              <img src={laptop} alt="laptop" />
            </div>
            <div className="img-two">
              <img src={awardmain} alt="awards" />
            </div>
          </div>
        </div>
        <div className="form-right ">
          
<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>

        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="/Signup" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
    </form>
</div>

         {/*} <form className="div-main-form" action="">
            <h2>Sign in to your account</h2>
            <form onSubmit={handleSubmit}>
              <div>

                <input
                  placeholder="Username"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>

                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>

                <input
                  placeholder="Mobile"
                  type="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div>

                <input
                  placeholder="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <Link to="/">
                <button  className="Signup-btn" type="submit">Sign Up</button>

              </Link>
            </form>
          </form> */}
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
