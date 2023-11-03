import React, { useEffect, useState } from 'react';
import './manager.css';

import Footer from '../../Components/Navbar/Home/Foooter/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Manager = () => {

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
  const [productsBoolean, setProductsBoolean] = useState(false);
  const [Delete , setdelete] = useState(false);

  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '8px',
    width: '1100px', // Adjust the width as needed

    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '500px',
    height: '500px',
    marginBottom: '16px',
  };
  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/v1/accountmanagerdisplay`);
      console.log("response: ", response);
      console.log(products);
      setProducts(response.data.data);
    } catch (error) {
      console.log("error in getting all signal Users", error);
    }
  };
  useEffect(() => {
    console.log('asdasd')
    getAllProducts()
    // return () => {
    //   console.log('Cleanup Function');
    //  }
}, [Delete , productsBoolean ])


  return (
    <>
    <Navbar/>
    <div className='flex  justify-evenly flex-wrap my-4' >
      <div style={containerStyle}>
        <h1 className='heads'>list of Global Trusted Forex Account Managers</h1>


      </div>
    </div>

    <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3">
                     Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Experience
                </th>
                <th scope="col" className="px-6 py-3">
                    Clients
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact
                </th>
            </tr>
        </thead>
        <tbody>

            {products.map((value) => (

        <tr className="bg-white border-b">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
            {value.groupname}
        </th>
        <td className="px-6 py-4">
        {value.experience}
        </td>
        <td className="px-6 py-4">
        {value.totalclients}
        </td>
        <td className="px-6 py-4">
            {value.whatsapp}
        </td>
        </tr>
            ))}

           
        </tbody>
    </table>
</div>
<div className='flex  justify-evenly flex-wrap my-4' >
      <div style={containerStyle}>
        <h1 className='heads'>Want to be a listed Account Manager?</h1>
        <button onClick={() => {navigate("/Addaccountmanager")}}
           
           className="text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded mb-2 md:mb-0 mr-0 md:mr-4 transition duration-300 ease-in-out btns"
         >
           List Now
         </button>


      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Manager;
