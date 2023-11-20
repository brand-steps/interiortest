// Signup.js
import Button from "react-bootstrap/Button";
import { Link, Router, Routes, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import laptop from "../../../assets/siginupformlaptop.svg";
import img2 from "../../../assets/imgsignals.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.png";
// import Awards from "../../Components/awards/Awards";
import axios from 'axios';
import Footer from "../../../Components/Navbar/Home/Foooter/Footer";
import Navbar from "../../../Components/Navbar/Navbar";

const Addmentors = () => {

  const [mentorname, setmentorname] = useState()
  const [email, setemail] = useState()
  const [mentorfee, setmentorfee] = useState()
  const [socialmedia , setsocialmedia] = useState();


const navigate = useNavigate();
const imageStyle = {
  width: '550px',
  height: '500px',
  marginBottom: '16px',
};
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  borderRadius: '8px',
  width: '600px', // Adjust the width as needed
  // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
};
const containerStyle2 = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  borderRadius: '8px',
  width: '300px', // Adjust the width as needed
  // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
};
  const signupForm = async () => {


    console.log('Signup Form');



 
    if (email && mentorname && mentorfee && socialmedia) {
      try {
        const response = await axios.post('https://lazy-cyan-cod-slip.cyclic.app/addmentors', {
          mentorname,
          email,
          mentorfee,
          socialmedia,
        });
//        alert("you have successfully registered for Global trusted signal group");
//alert("Mentor Successfully Registered");
        // Handle the response according to your needs
        if (response.status === 201) {

        } else {
          console.log('Signup failed');
          // Handle signup failure
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }

    }
    else {          
        alert("you must fill all the required fields");
}

  };


  return (
    <>
    <Navbar/>
    <div className='flex  justify-evenly flex-wrap form-main'>
    <div style={containerStyle}>
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700" style={containerStyle2}>
    <form action="https://formsubmit.co/4d5ad1a13760a79052b377e61e80f7c6" method="POST" class="space-y-6">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register for Global Mentorship
</h5>
        <div>
            <label for="mentorname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mentor Name</label>
            <input name="mentorname" id="mentorname" onChange={(event) => { setmentorname(event.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />
        </div>
        <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" onChange={(event) => { setemail(event.target.value)}} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div>
            <label for="mentorfee" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">mentoring fee / month</label>
            <input type="number" onChange={(event) => { setmentorfee(event.target.value)}} name="mentorfee" id="mentorfee" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required />
        </div>
        <div>
            <label for="socialmedia" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Facebook Link</label>
            <input name="socialmedia" id="socialmedia" onChange={(event) => { setsocialmedia(event.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>



        <button type="submit" onClick={signupForm} class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continue</button>
    </form>
</div>
      </div>
      <div style={containerStyle}>
      <img src={laptop} style={imageStyle} alt="laptop" />

      </div>




    </div>

    <Footer/>
    </>
  );
};

export default Addmentors;
