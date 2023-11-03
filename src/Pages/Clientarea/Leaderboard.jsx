import React, { useEffect, useState } from 'react';
import './leaderboard.css';
import img from '../../assets/img2.jpg'
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';

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

      const [products, setProducts] = useState([]);
      const [productsBoolean, setProductsBoolean] = useState(false);
      const [Delete , setdelete] = useState(false);

      const getAllimages = async () => {
        try {
          const response = await axios.get(`https://lazy-cyan-cod-slip.cyclic.app/api/v1/Allimage`);
          console.log("response: ", response);
          console.log(products);
          setProducts(response.data.data);
        } catch (error) {
          console.log("error in getting all products", error);
        }
      };

      useEffect(() => {
        console.log('asdasd')
        getAllimages()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , productsBoolean ])

  return (
    <>
    <Navbar/>
    <div className='flex  justify-evenly flex-wrap mt-3'>
      <div style={containerStyle}>
<h1 className='text-2xl'>Leaderboard</h1>
      </div>

    </div>
<div className='flex  justify-evenly flex-wrap my-4'>
{products.map((value) => (
      <div style={containerStyle}>
      <img src={value.imageUrl} alt="Fairs" style={imageStyle} />

      </div>
      ))}  

    </div>




    </>
  );
}

export default Leaderboard;
