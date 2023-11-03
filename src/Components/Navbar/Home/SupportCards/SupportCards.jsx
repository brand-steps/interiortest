import React from 'react'
import './SupportCards.css' 

const SupportCards = () => {
  return (
    <div   className='flex justify-evenly flex-wrap'  >
  <div  style={{"borderBottom" : "4px solid red"}}  className="cardofContent  w-72	 h-96 p-8 shadow-md mb-4 md:mb-0 md:mr-4">

    <div className="mt-4 text-start ">
        <h1  className='text-black mt-16 font-bold mb-9 text-xl' >Select Your Platform!</h1>
        <p  style={{"color" : "#374F63"}}  className=" text-md">We have both Metatrader 4 and 5 available for your FOREX funded account. Trade with ease with the trading platform you prefer!</p>
    </div>
</div>
  <div  style={{"borderBottom" : "4px solid red"}}  className="cardofContent  w-72	 h-96 p-8 shadow-md mb-4 md:mb-0 md:mr-4">

    <div className="mt-4 text-start ">
        <h1  className='text-black mt-16 font-bold mb-9 text-xl' >We are always by your side!</h1>
        <p  style={{"color" : "#374F63"}}  className=" text-md">Our 24/7 support team is available for all your FOREX Funded account needs, day or night we are there for you. When you need us we are always there to assist.</p>
    </div>
</div>
  <div  style={{"borderBottom" : "4px solid red"}}  className="cardofContent  w-72	 h-96 p-8 shadow-md mb-4 md:mb-0 md:mr-4">

    <div className="mt-4 text-start ">
        <h1  className='text-black mt-16 font-bold mb-9 text-xl' >We are a community!</h1>
        <p  style={{"color" : "#374F63"}}  className="text-sm text-md">Talk actively with us, our community and our fans on discord. We provide talks and information in real time to actively promote good behavior in trading. Join our discord and see what all the fuss is about!</p>
    </div>
</div>
  <div  style={{"borderBottom" : "4px solid red"}}  className="cardofContent  w-72	 h-96 p-8 shadow-md mb-4 md:mb-0 md:mr-4">

    <div className="mt-4 text-start ">
        <h1  className='text-black mt-16 font-bold mb-9 text-xl' >Live LeaderBoard!</h1>
        <p  style={{"color" : "#374F63"}}  className="text-sm text-md">In our client area we offer a dynamic live tracking dashboard for you to stay updated on your progress in the forex competition.
        Additionally, you can engage in lively chats with fellow group participants, fostering a supportive enviornment
        where you can learn from each other and improve your trading skills.
        </p>
    </div>
</div>




    </div>
  )
}

export default SupportCards