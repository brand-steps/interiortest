import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './aboutus.css';
import Footer from '../../Components/Navbar/Home/Foooter/Footer';
import img1 from '../../assets/About.webp'
const ABoutus = () => {




  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: '8px',
    width: '600px', // Adjust the width as needed
    height: '600px'
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '600px',
    height: '400px',
  };



  return (
    <>
    <Navbar/>
    <div className='flex  justify-evenly flex-wrap my-9'>
      <div style={containerStyle}>
        <p>MYforex competition project, It's a initiative that aims to help traders who have limited capital to start their trading journey. Unlike traditional prop firms, We don't provide capital upfront. Instead, we operate in a systematic way by using your own fees to generate profits for you. The best part is, our goal is to eliminate the banks and prop firms that often take your money if you experience losses. We believe in redistributing losses and turning them into someone else's profit, rather than letting the banks and brokers benefit. It's all about challenging the monopoly and creating a fairer trading environment for everyone. How awesome is that? Keep an eye out for myforex competition if you're looking for a different approach to trading. Let's break those barriers and make trading more accessible for all! 
Our Main head office is In London UK and have sub branches In Asia and Europe</p>
      </div>
      <div style={containerStyle}>
        <img src={img1} alt="Fairs" style={imageStyle} />
      </div>


      
    </div>
    <Footer/>
    </>
  );
}

export default ABoutus;
