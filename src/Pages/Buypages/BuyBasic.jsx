import React from 'react'
import { useEffect , useState} from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar/Navbar';
import {loadStripe} from '@stripe/stripe-js';

const BuyBasic = () => {


const [responce  , setResponce] = useState("")
const [email  , setemail] = useState("")
const [username  , setusername] = useState("")
const [country  , setcountry] = useState("")
const [phone  , setphone] = useState("")
const [packages  , setpackages] = useState("Basic Package")
const [price  , setprice] = useState("25")
const [paymentoption  , setpaymentoption] = useState("25")

const handlecchange = (ev) => {
  const {value, name} = ev.target;
  setResponce(()=> {
      return {
          ...responce, [name]: value
      }
  })

};
const Paymentcheck = async () => {

  console.log("em",email)
  console.log("us",username)
  console.log("ph",phone)
  console.log("co",country)
  console.log("pr",price)
  const stripe = await loadStripe('pk_live_51MddPxHx7EDReYP0Pmq6JbPaSfgvytBrRTc1W3SiOFJpiqIh3Yb1fKQBzzeyKA75v3lPnn4GUF2cks7woy9GOKYl00unW3ATMZ');
  const body = {
    products: responce,
    prices: price
  }

  const headers = {
    "Content-Type": "application/json"
  }
 // const response = await fetch("https://lazy-cyan-cod-slip.cyclic.app/checkout-sess", {
   // method: "POST",
    //headers: headers,
    //body:JSON.stringify(body)
  //})

 const response = await axios.post('https://lazy-cyan-cod-slip.cyclic.app/checkout-sess', {
   responce,
    price

  });
  const session = await response.json();
  const result = stripe.redirectToCheckout({
    sessionId: responce._id
  })
  if (result.error) {
    console.log(result.error)
  }
}
const handlepayment = () => {
  axios.post(`https://lazy-cyan-cod-slip.cyclic.app/create-checkout-session`, {
    responce,
    packages,
    price
  }).then((res) => {
    if (res.data.url) {
      window.location.href = res.data.url
    }
  }).catch((err)=> {console.log(err.message)})
}
const Checkout = async () => {


  console.log('Signup Form');




  if (email && username && phone ) {
    try {
      const response = await axios.post('https://lazy-cyan-cod-slip.cyclic.app/checkout', {
        email,
        username,
        country,
        phone,
        price,
      });
//        alert("you have successfully registered for Global trusted signal group");

      // Handle the response according to your needs
      if (response.status === 201) {

      } else {
        console.log('payment failed');
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
    useEffect(() => {

        const getProfile = async () => {
          try {
            let response = await axios.get(`https://lazy-cyan-cod-slip.cyclic.app/api/v1/profile`,
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
              setusername(responce.username)
              console.log("us",username)

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
  <form action="https://formsubmit.co/4d5ad1a13760a79052b377e61e80f7c6" method="POST" className="bg-white p-6 border-2  rounded-md shadow-md w-full max-w-md">
    <h2 className="text-4xl font-bold mb-2 my-7 justify-center">Confirm Your Payment </h2>
  {/*}  <p className='py-4'  ><span className="font-semibold 	">Email :</span> {responce.email}</p>
    <p className='py-4'  ><span className="font-semibold 	">Username:</span> {responce.username}</p>
    <p className='py-4'  ><span className="font-semibold 	">Country:</span> {responce.country}</p>
    <p className='py-4'  ><span className="font-semibold 	">phone:</span> {responce.phone}</p>
  <p className='py-4'  ><span className="font-semibold 	">Price: </span> 25 $ </p> */}
    <div className='py-4'>
    <span className="font-semibold 	">Email : </span>
<input type="text" name='email'  onChange={(event) => { setemail(event.target.value); handlecchange(event) }} value={responce.email} />
</div>
<div className='py-4'>
    <span className="font-semibold 	">Username: </span>
<input type="text" name='username' value={responce.username} onChange={(event) => { setusername(event.target.value); handlecchange(event) }}/>
</div>
<div className='py-4'>
    <span className="font-semibold 	">Country: </span>
<input type="text" name='country' value={responce.country}onChange={(event) => { setcountry(event.target.value); handlecchange(event) }}/>
</div>
<div className='py-4'>
    <span className="font-semibold 	">phone: </span>
<input type="text" name='phone' value={responce.phone} onChange={(event) => { setphone(event.target.value); handlecchange(event) }}/>
</div>
<div className='py-4'>
    <span className="font-semibold 	">Price: </span>
<input type="text" name='price' value="25 $" />
</div>

    <br/><br/><br/><br/><br/><br/>
    <div >
    <button onClick={handlepayment} type='submit' style={{ backgroundColor: "rgb(153 27 27)" }} className="text-white font-bold px-9  py-4 transition duration-300 ease-in-out  ">
        Buy Now
      </button>
      </div>
  </form>
</div>

    </div>
    </div>
    
  )
}

export default BuyBasic;