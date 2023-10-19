import React from 'react'
import '../SupportCards/SupportCards.css' 
const SupportCardFifth = () => {
  return (
<div className="flex flex-col md:flex-row justify-evenly">
  <div className="cardofContent w-full md:w-96 h-auto p-8 shadow-md mb-4 md:mb-0 md:mr-4" style={{ backgroundColor: "#EBF4F8" }}>
    <img height="100" src="https://myforexfunds.com/wp-content/uploads/2023/07/More-than-a-refund.gif?w=600" alt="" />
    <div className="mt-4 text-center">
      <h1 className="text-black mt-3 md:mt-9 font-bold mb-4 text-md">◉ Earn from Phase 1!</h1>
      <p style={{ color: "#374F63" }} className="text-sm">Get 2% of your trading profits by passing phase 1 and 4% of your trading profits by passing phase 2. Get paid on your journey to a forex funded account.</p>
    </div>
  </div>

  <div className="cardofContent w-full md:w-96 h-auto p-8 shadow-md mb-4 md:mb-0 md:mr-4" style={{ backgroundColor: "#EBF4F8" }}>
    <img height="100" src="https://myforexfunds.com/wp-content/uploads/2023/07/Earn-from-Phase-1.gif" alt="" />
    <div className="mt-4 text-center">
      <h1 className="text-black mt-3 md:mt-9 font-bold mb-4 text-md">◉ More than a refund!</h1>
      <p style={{ color: "#374F63" }} className="text-sm">We pay 112% refund when you reach your first profit split. Why settle for just a refund when you can get rewarded for reaching a new milestone!</p>
    </div>
  </div>

  <div className="cardofContent w-full md:w-96 h-auto p-8 shadow-md mb-4 md:mb-0 md:mr-4" style={{ backgroundColor: "#050628" }}>
    <img height="100" src="https://myforexfunds.com/wp-content/uploads/2022/11/VIP-Reward-Program-1.gif" alt="" />
    <div className="mt-4 text-center">
      <h1 className="text-white mt-3 md:mt-9 font-bold mb-4 text-md">◉ VIP Reward Program</h1>
      <p style={{ color: "white" }} className="text-sm">With a 90% profit split, withdraws at any time with no restrictions, semi-automated payout confirmations (Money in your Deel account within 10 hours), and many more surprising gifts, our VIP Program is here to change the game. Earn your VIP place now.</p>
    </div>
  </div>
</div>

  )
}

export default SupportCardFifth