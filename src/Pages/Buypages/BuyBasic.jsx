import React from 'react'
import { useEffect , useState} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';

const BuyBasic = () => {


const [responce  , setResponce] = useState("")


    useEffect(() => {

        const getProfile = async () => {
          try {
            let response = await axios.get(`http://localhost:8000/api/v1/profile`,
              {
                withCredentials: true,
                headers: {
                  'Cache-Control': 'no-cache',
                  'Pragma': 'no-cache',
                  'Expires': '0',
                }
              });
              console.log("response: ", response.data);
              setResponce(response.data)
          } catch (error) {
            console.log("axios error: ", error);
      
      
          }
      
        }
        getProfile();
      
      }, [])
    
  return (

    <div>
            <Navbar/>
            <div className="flex flex-wrap justify-center">
      <div className="flex mt-4 justify-center h-screen w-3/4">
  <div className="bg-white p-6 border-2  rounded-md shadow-md w-full max-w-md">
    <h2 className="text-4xl font-bold mb-2 my-7 justify-center">Confirm Your Payment</h2>
    <p className='py-4'  ><span className="font-semibold 	">Email :</span> {responce.email}</p>
    <p className='py-4'  ><span className="font-semibold 	">Username:</span> {responce.username}</p>
    <p className='py-4'  ><span className="font-semibold 	">Country:</span> {responce.country}</p>
    <p className='py-4'  ><span className="font-semibold 	">phone:</span> {responce.phone}</p>
    <p className='py-4'  ><span className="font-semibold 	">Price: </span> 25 $ </p>


    <br/><br/><br/><br/><br/><br/>
    <div >
    <button style={{ backgroundColor: "rgb(153 27 27)" }} className="text-white font-bold px-9  py-4 transition duration-300 ease-in-out  ">
        Buy Now
      </button>
      </div>
  </div>
</div>

    </div>
    </div>
    
  )
}

export default BuyBasic;