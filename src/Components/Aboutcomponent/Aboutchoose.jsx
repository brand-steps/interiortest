import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AboutChoose = () => {
const [hover, sethover] = useState(false)


const divStyle = {
  backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ba4993108388437.5fbcd121e9065.jpg')`,
  /* Other styles you might want to apply */
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
  };

  const divStyleimage = {
    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZNMdSv1SKgloyVeqRrTk7ksR8hE0juNJpTg&usqp=CAU')",
    /* Other styles you might want to apply */
  };
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '400px', // Adjust the width as needed
    height: '200px',

    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '390px',
    height: '200px',
    marginBottom: '16px',
  };



  return (
    <>
    <div style={divStyle}>
    <div className='ml-4 md:ml-16 pt-8 '>
  <div style={{ "textTransform": "uppercase" }} className='text-center text-white text-3xl md:text-3xl font-bold mt-6'>Why Choose Us? </div>


</div>
    <div className='flex  justify-evenly flex-wrap pt-12 py-16' >
      <Link to={'/interiordesign'}>
    <div style={containerStyle} className='mt-4 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
<p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'> Experienced Staff</p>
<p className='text-white font-semibold text-base text-center mt-4'>We have experienced staff of interior designers, Archetectures, 3D Designers, etc.</p>
</div>
</Link> 
<Link to={"/exteriordetails"}>
<div style={containerStyle} className='mt-4 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'>Creative Designers</p>
        <p className='text-white font-semibold text-base text-center mt-4'>Our designing team designs with your taste, space, and budget, Also our team will guide you.</p>

      </div>
      </Link>
      <Link to={"/Architecturedetails"}>
      <div style={containerStyle} className='mt-4 hover:scale-x-110 transition duration-500 cursor-pointer object-cover ' onMouseEnter={()=> {sethover(true)}} onMouseLeave={()=> {sethover(false)}}>
        <p className='font-bold text-2xl text-white sm:text-2xl lg:text-4xl text-center'>Free Consultation</p>
        <p className='text-white font-semibold text-base text-center mt-4'>We providing free consultation about interior quality, space, budget and etc but it is free for all.</p>

      </div>
      </Link>

    
      </div>
      </div>
    </>
  );
}

export default AboutChoose;
