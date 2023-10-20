import React, { useState } from 'react'
import bull from '../../../Images/My FPrec Competition bull blue-01.png'

const   SupportSixth = () => {
  const [Basic, setBasic] = useState(true);
  const [Amateur, setAmateur] = useState(false);
  const [professional, setProfessional] = useState(false);


const styles = {
    backgroundColor : 'rgb(239 68 68)',
    cursor : 'pointer'
  
}
const styles2 = {
  backgroundColor : 'rgb(220 38 38)',
  cursor : 'pointer'

}
const styles3 = {
  backgroundColor : 'rgb(185 28 28)',
  cursor : 'pointer'

}

const basicfunction = () => {
  setAmateur(false);
  setBasic(true);
  setProfessional(false)
}

const amateurfunction = () => {
  setAmateur(true);
  setBasic(false);
  setProfessional(false)
}

const professionalfunction = () => {
  setAmateur(false);
  setBasic(false);
  setProfessional(true)
}
    return (
        <div style={{"backgroundColor" : "white"}}  className='py-6 mt-4'  >
            <div class="flex flex-col items-center justify-center my-8 px-4 md:px-8 lg:px-16">
                <div class="text-center">
                    <h1 class="text-2xl text-black	 md:text-4xl lg:text-5xl font-bold my-2">Win Upto 35000$ In 24 Hours</h1>
                    <img class="w-full max-w-lg mx-auto my-4 md:my-6 lg:my-8" src={bull} alt="" />
                    <p class="w-full md:w-10/12 lg:w-8/12 mx-auto text-blue-950	">
Don't give your funds to prop firms or brokers with a win rate of less then 5%,
start your forex competition now with a win rate of 30%
                    </p>
                </div>
            </div>

            <div className='flex justify-center w-full flex-wrap'>
  <div className='bg-white shadow-md rounded-md w-full md:w-96 mx-2 my-4'>
    <div style={{ backgroundColor: 'rgb(239 68 68)' }} className='flex items-center justify-center pl-4 h-32'>
      <div className="flex flex-col ml-4">
        <h2 className="text-xl font-semibold text-white mb-2">Basic</h2>
        <p className="text-white">(Some Knowledge)</p>
      </div>
    </div>
    <div className='px-2 my-12'>
      <h1 className="text-black mt-4 flex items-center mb-6 text-xl text-md">
      <div  className='mr-2 '  >
<svg
width="20"    
height="20"   
viewBox="0 0 512 512"
fill="rgb(185 28 28)"  
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
></path>
</svg>
</div>

First Prize: 100$
      </h1>

      <h1 className="text-black mt-4 flex items-center mb-6 text-xl text-md">
      <div  className='mr-2 '  >
<svg
width="20"    
height="20"   
viewBox="0 0 512 512"
fill="rgb(185 28 28)"  
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
></path>
</svg>
</div>

Second Prize: 50$
      </h1>

      <h1 className="text-black mt-4 flex items-center mb-6 text-xl text-md">
      <div  className='mr-2 '  >
<svg
width="20"    
height="20"   
viewBox="0 0 512 512"
fill="rgb(185 28 28)"  
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
></path>
</svg>
</div>

Third prize: 30$
      </h1>
      
      <div className="flex flex-col md:flex-row justify-center mt-4 ">
        <button style={{ backgroundColor: "rgb(153 27 27)" }} className="text-white font-bold px-9  py-4 transition duration-300 ease-in-out">
          Buy Now
        </button>

      </div>
    </div>
  </div>
  
  <div className='bg-white shadow-md rounded-md w-full md:w-96 mx-2 my-4'>
    <div style={{ backgroundColor: 'rgb(220 38 38)' }} className='flex items-center justify-center pl-4 h-32'>
      {/*<img width="80px" height="80px" className="object-contain" src="https://myforexfunds.com/wp-content/uploads/2022/11/Evaluation.png" alt="" />
      */}
      <div className="flex flex-col ml-4">
        <h2 className="text-xl font-semibold text-white mb-2">Amateur</h2>
        <p className="text-white">(Experienced)</p>
      </div>
    </div>
    <div className='px-2 my-12'>
      <h1 className="text-black mt-4 flex items-center mb-6 text-xl text-md">
      <div  className='mr-2 '  >
<svg
width="20"    
height="20"   
viewBox="0 0 512 512"
fill="rgb(185 28 28)"  
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
></path>
</svg>
</div>

First Prize: 250$
      </h1>
      <h1 className="text-black mt-4 flex items-center mb-6 text-xl text-md">
      <div  className='mr-2 '  >
<svg
width="20"    
height="20"   
viewBox="0 0 512 512"
fill="rgb(185 28 28)"  
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
></path>
</svg>
</div>

Second Prize: 100$
      </h1>
      <h1 className="text-black mt-4 flex items-center mb-6 text-xl text-md">
      <div  className='mr-2 '  >
<svg
width="20"    
height="20"   
viewBox="0 0 512 512"
fill="rgb(185 28 28)"  
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
></path>
</svg>
</div>

Third Prize: 75$
      </h1>
      <div className="flex flex-col md:flex-row justify-center mt-4">
        <button style={{ backgroundColor: "rgb(153 27 27)" }} className="text-white font-bold px-9  py-4 transition duration-300 ease-in-out">
          Buy Now
        </button>

      </div>
    </div>
  </div>
  
  <div className='bg-white shadow-md rounded-md w-full md:w-96 mx-2 my-4'>
    <div style={{ backgroundColor: 'rgb(185 28 28)' }} className='flex items-center justify-center pl-4 h-32'>
      <div className="flex flex-col ml-4">
        <h2 className="text-xl font-semibold text-white mb-2">Professional</h2>
        <p className="text-white">(Trades full time for a living)</p>
      </div>
    </div>
    <div className='px-2 my-12'>
      <h1 className="text-black mt-4 flex items-center mb-6 text-xl text-md">
      <div  className='mr-2 '  >
<svg
width="20"    
height="20"   
viewBox="0 0 512 512"
fill="rgb(185 28 28)"  
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
></path>
</svg>
</div>

First Prize: 500$
      </h1>
      <h1 className="text-black mt-4 flex items-center mb-6 text-xl text-md">
      <div  className='mr-2 '  >
<svg
width="20"    
height="20"   
viewBox="0 0 512 512"
fill="rgb(185 28 28)"  
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
></path>
</svg>
</div>

Second Prize: 200$
      </h1>
      <h1 className="text-black mt-4 flex items-center mb-6 text-xl text-md">
      <div  className='mr-2 '  >
<svg
width="20"    
height="20"   
viewBox="0 0 512 512"
fill="rgb(185 28 28)"  
xmlns="http://www.w3.org/2000/svg"
>
<path
d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z"
></path>
</svg>
</div>

Third Prize: 130$
      </h1>
      
      <div className="flex flex-col md:flex-row justify-center mt-4">
        <button style={{ backgroundColor: "rgb(153 27 27)" }} className="text-white font-bold px-9  py-4 transition duration-300 ease-in-out">
          Buy Now
        </button>

      </div>
    </div>
  </div>
</div>




<div  className='flex justify-center my-6 '>
<div    className='px-12 py-4 '  style={styles} onClick={basicfunction} >Basic </div>
<div    className='px-12 py-4'  style={styles2} onClick={amateurfunction}> Amateur</div>
<div    className='px-12 py-4' style={styles3} onClick={professionalfunction} >Professional</div>


</div>
{Basic ? (

<div class="mx-auto p-4 md:p-8 rounded-lg">
    <table class="w-full border">
      {/*  <thead>
            <tr>
                <th class="p-2"></th>
                <th style={{ backgroundColor: "#0570A6" }} class="border p-4 md:p-6 text-white">$10,000</th>
                <th style={{ backgroundColor: "#0570A6" }} class="border p-4 md:p-6 text-white">$20,000</th>
                <th style={{ backgroundColor: "#0570A6" }} class="border p-4 md:p-6 text-white">$50,000</th>
                <th style={{ backgroundColor: "#0570A6" }} class="border p-4 md:p-6 text-white">$100,000</th>
            </tr>
</thead> */}
        <tbody>

             <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border   text-white text-center ">Account Size</td>
          <td class="border py-6"></td>
          <td class="border py-6 text-center">10000 $</td>
          <td class="border py-6"></td>


        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border  text-center text-white  ">Competition days</td>
          <td class="border py-6 text-center"></td>
          <td class="border py-6 text-center">2 days</td>
          <td class="border py-6"></td>

        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border  text-center text-white  ">Daily Drawdown</td>
          <td class="border p-2 py-6">	</td>
          <td class="border p-2 py-6 text-center">upto your account balance	</td>
          <td class="border p-2 py-6"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border  text-center text-white  ">Maximum Drawdown</td>
          <td class="border p-2 py-6"></td>
          <td class="border p-2 py-6 text-center">upto your account balance	</td>
          <td class="border p-2 py-6"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Average Leverage</td>
          <td class="border p-2 text-center"></td>
          <td class="border p-2 text-center">1:500</td>
          <td class="border p-2 text-center"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Winning Prize</td>
          <td class="border p-2 text-center">1st: $100</td>
          <td class="border p-2 text-center">2nd: $50</td>
          <td class="border p-2 text-center">3rd: $30</td>
        </tr>
        <tr class="border">
            
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Number of Participants</td>
          <td class="border p-2 text-center"></td>
          <td class="border p-2 text-center">10 Participants</td>
          <td class="border p-2 text-center"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Entry Fees</td>
          <td class="border p-2 text-center"></td>
          <td class="border p-2 text-center">$ 25</td>
          <td class="border p-2 text-center"></td>
        </tr>
        </tbody>
    </table>
</div>
    ) : <></>}    



{Amateur ? (

<div class="mx-auto p-4 md:p-8 rounded-lg">
    <table class="w-full border">
     
        <tbody>
             <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border   text-white text-center ">Account Size</td>
          <td class="border py-6"></td>
          <td class="border py-6 text-center">50000 $</td>
          <td class="border py-6"></td>


        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border  text-center text-white  ">Competition days</td>
          <td class="border py-6 text-center"></td>
          <td class="border py-6 text-center">2 days</td>
          <td class="border py-6"></td>

        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border  text-center text-white  ">Daily Drawdown</td>
          <td class="border p-2 py-6">	</td>
          <td class="border p-2 py-6 text-center">upto your account balance	</td>
          <td class="border p-2 py-6"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border  text-center text-white  ">Maximum Drawdown</td>
          <td class="border p-2 py-6"></td>
          <td class="border p-2 py-6 text-center">upto your account balance	</td>
          <td class="border p-2 py-6"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Average Leverage</td>
          <td class="border p-2 text-center"></td>
          <td class="border p-2 text-center">1:500</td>
          <td class="border p-2 text-center"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Winning Prize</td>
          <td class="border p-2 text-center">1st: $270</td>
          <td class="border p-2 text-center">2nd: $100</td>
          <td class="border p-2 text-center">3rd: $70</td>
        </tr>
        <tr class="border">
            
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Number of Participants</td>
          <td class="border p-2 text-center"></td>
          <td class="border p-2 text-center">10 Participants</td>
          <td class="border p-2 text-center"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Entry Fees</td>
          <td class="border p-2 text-center"></td>
          <td class="border p-2 text-center">$ 49</td>
          <td class="border p-2 text-center"></td>
        </tr>
        </tbody>
    </table>
</div>
    ) : <></>}    
{professional ? (

<div class="mx-auto p-4 md:p-8 rounded-lg">
    <table class="w-full border">
     
        <tbody>
             <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border   text-white text-center ">Account Size</td>
          <td class="border py-6"></td>
          <td class="border py-6 text-center">100000 $</td>
          <td class="border py-6"></td>


        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border  text-center text-white  ">Competition days</td>
          <td class="border py-6 text-center"></td>
          <td class="border py-6 text-center">2 days</td>
          <td class="border py-6"></td>

        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border  text-center text-white  ">Daily Drawdown</td>
          <td class="border p-2 py-6">	</td>
          <td class="border p-2 py-6 text-center">upto your account balance	</td>
          <td class="border p-2 py-6"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border  text-center text-white  ">Maximum Drawdown</td>
          <td class="border p-2 py-6"></td>
          <td class="border p-2 py-6 text-center">upto your account balance	</td>
          <td class="border p-2 py-6"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Average Leverage</td>
          <td class="border p-2 text-center"></td>
          <td class="border p-2 text-center">1:500</td>
          <td class="border p-2 text-center"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Winning Prize</td>
          <td class="border p-2 text-center">1st: $600</td>
          <td class="border p-2 text-center">2nd: $200</td>
          <td class="border p-2 text-center">3rd: $125</td>
        </tr>
        <tr class="border">
            
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Number of Participants</td>
          <td class="border p-2 text-center"></td>
          <td class="border p-2 text-center">10 Participants</td>
          <td class="border p-2 text-center"></td>
        </tr>
        <tr class="border">
          <td style={{"backgroundColor" : "rgb(220 38 38)"}}  class="border p-6 text-center text-white  ">Entry Fees</td>
          <td class="border p-2 text-center"></td>
          <td class="border p-2 text-center">$ 99</td>
          <td class="border p-2 text-center"></td>
        </tr>
        </tbody>
    </table>
</div>
    ) : <></>}  
        </div>
    )
}

export default SupportSixth