// Signup.js
import Button from "react-bootstrap/Button";
import { Link, Router, Routes, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import laptop from "../../assets/siginupformlaptop.svg";
import awardmain from "../../assets/awards.svg";
import "./siginup.css";
import Navbar from "../../Components/Navbar/Navbar";
// import Awards from "../../Components/awards/Awards";
import axios from 'axios';
import Footer from "../../Components/Navbar/Home/Foooter/Footer";

const Signup = () => {

  const [username, setUserName] = useState()
  const [email, setemail] = useState()
  const [password, setPassword] = useState()
  const [reTypepassword, setReTypePassword] = useState()
  const [phone , setPhone] = useState();
  const [country , setCountry] = useState();


const navigate = useNavigate();

  const signupForm = async () => {


    console.log('Signup Form');



 
    if (email && phone && country && password ) {
      try {
        const response = await axios.post('http://localhost:8000/signup', {
          username,
          email,
          phone,
          country,
          password,
        });
        alert("you have successfully registered");
        navigate("/login")
        // Handle the response according to your needs
        if (response.status === 201) {


          // Perform any necessary actions on successful signup
        } else {
          console.log('Signup failed');
          // Handle signup failure
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }

    }

  };


  return (
    <>
    <Navbar/>
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
    <div class="space-y-6">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register to our platform</h5>
        <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your User Name</label>
            <input name="username" id="username" onChange={(event) => { setUserName(event.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />
        </div>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" onChange={(event) => { setemail(event.target.value)}} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Number</label>
            <input type="number" onChange={(event) => { setPhone(event.target.value)}} name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />
        </div>
        <div>
            <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Country</label>
            <input name="country" id="country" onChange={(event) => { setCountry(event.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" onChange={(event) => { setPassword(event.target.value)}} name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>

        <button type="submit" onClick={signupForm} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register your account</button>
    </div>
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
    <Footer/>
    </>
  );
};

export default Signup;
