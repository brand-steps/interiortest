import React from 'react'
import  img1 from  '../../../Images/images-05.jpg'
import './MidCards.css'

const MidCards = () => {
  return (
<div class="flex flex-col md:flex-row my-6">
<div class="card1 w-full md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-700 p-8 shadow-md mb-4 md:mb-0 md:mr-4">
    <div class="flex items-center justify-center">
        <img width="80px" height="80px" class="object-contain" src="https://myforexfunds.com/wp-content/uploads/2022/11/Rapid.png" alt="" />
        <div class="flex flex-col ml-4">
            <h2 class="text-xl font-semibold text-white mb-2">Rapid</h2>
            <p class="text-white">(Some Knowledge)</p>
        </div>
    </div>
    <div class="mt-4 text-center">
        <p class="text-gray-200 text-sm">Our Rapid account allows our traders to earn bonuses from day one.</p>
        <button style={{ backgroundColor: "#00008b" }} class="mt-4 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded mb-2 md:mb-0 md:mr-4 transition duration-300 ease-in-out">
        Start Now
    </button>
    </div>
</div>


<div class="card2 w-full md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-700 p-8 shadow-md mb-4 md:mb-0 md:mx-2">
    <div class="flex items-center justify-center">
        <img width="80px" height="80px" class="object-contain" src="https://myforexfunds.com/wp-content/uploads/2022/11/Evaluation.png" alt="" />
        <div class="flex flex-col ml-4">
            <h2 class="text-xl font-semibold text-white mb-2">Evaluation</h2>
            <p class="text-white">(Experienced)</p>
        </div>
    </div>
    <div class="mt-4 text-center">
        <p class="text-gray-200 text-sm">Our Evaluation program is built for traders to prove their worth.</p>
        <button style={{ backgroundColor: "#00008b" }} class="mt-4 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded mb-2 md:mb-0 md:mr-4 transition duration-300 ease-in-out">
        Start Now
    </button>
    </div>
</div>

<div class="card3 w-full md:w-1/3 bg-gradient-to-br from-blue-500 to-blue-700 p-8 shadow-md">
    <div class="flex items-center justify-center">
        <img width="80px" height="80px" class="object-contain" src="https://myforexfunds.com/wp-content/uploads/2022/11/Accelerated.png" alt="" />
        <div class="flex flex-col ml-4">
            <h2 class="text-xl font-semibold text-white mb-2">Accelerated</h2>
            <p class="text-white">(Trades full time for a living)</p>
        </div>
    </div>
    <div class="mt-4 text-center">
        <p class="text-gray-200 text-sm">Accelerated program is built for our traders to start trading a live account from day one.</p>
        <button style={{ backgroundColor: "#00008b" }} class="mt-4 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded mb-2 md:mb-0 md:mr-4 transition duration-300 ease-in-out">
        Start Now
    </button>
    </div>
</div>

</div>

  )
}

export default MidCards