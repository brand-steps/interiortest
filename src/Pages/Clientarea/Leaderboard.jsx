import React from 'react';
import './leaderboard.css';
import img from '../../assets/img2.jpg'
import Navbar from '../../Components/Navbar/Navbar';


const Leaderboard = () => {
    const imageStyle = {
        width: '1100px',
        height: '600px',
        marginBottom: '16px',
      };
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderRadius: '8px',
        width: '1200px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };


  return (
    <>
    <Navbar/>
    <div className='flex  justify-evenly flex-wrap mt-3'>
      <div style={containerStyle}>
<h1 className='text-2xl'>Leaderboard</h1>
      </div>

    </div>
<div className='flex  justify-evenly flex-wrap my-4'>
      <div style={containerStyle}>
      <img src={img} alt="Fairs" style={imageStyle} />

      </div>

    </div>




    </>
  );
}

export default Leaderboard;
