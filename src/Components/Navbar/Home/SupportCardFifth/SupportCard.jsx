import React from 'react'
import '../SupportCards/SupportCards.css' 
const SupportCardFifth = () => {
  return (
<div className="flex flex-col md:flex-row justify-evenly">
  <div className="cardofContent w-full md:w-96 h-auto p-8 shadow-md mb-4 md:mb-0 md:mr-4" style={{ backgroundColor: "black" }}>
    <div className="mt-4 text-center">
      <h1 className="text-white mt-3 md:mt-9 font-bold mb-4 text-md">◉  REGISTER</h1>
      <p style={{ color: "white" }} className="text-sm text-start">
      To register for the My forex competition, you can follow these exciting steps:
      <br/><br/>
      1. Visit the competition website or platform.
      <br/>
      2. Choose the competition level that suits your skills and account size.
      <br/>
      3. Fill out the registration form with your personal details.
      <br/>
      4. Select your desired account size, such as basic with $10,000, amateur with $25,000, or professional with $50,000.
      <br/>
      5. Complete the registration process by agreeing to the terms and conditions.
      <br/>
      6. Make any required payment or deposit to secure your spot in the competition.
      <br/>
      7. Once registered, Credentials and relevant Information will be Emailed to you
      </p>
    </div>
  </div>

  <div className="cardofContent w-full md:w-96 h-auto p-8 shadow-md mb-4 md:mb-0 md:mr-4" style={{ backgroundColor: "black" }}>
    <div className="mt-4 text-center">
      <h1 className="text-white mt-3 md:mt-9 font-bold mb-4 text-md">◉  TRADE</h1>
      <p style={{ color: "white" }} className="text-sm">No trading Rules such As maximum daily or overall drawdown, just trade as you like but don't forget to Look into the leaderboard so you can decide your risk and reward accordingly</p>
    </div>
  </div>

  <div className="cardofContent w-full md:w-96 h-auto p-8 shadow-md mb-4 md:mb-0 md:mr-4" style={{ backgroundColor: "black" }}>
    <div className="mt-4 text-center">
      <h1 className="text-white mt-3 md:mt-9 font-bold mb-4 text-md">◉  Withdraw</h1>
      <p style={{ color: "white" }} className="text-sm">Once You Find your self in top 3 our representative with Email you For your withdrawal Request you just need to Sit back and enjoy, No Further Requirement such as KYC Just  Bank account Number and your Funds are ready To Go</p>
    </div>
  </div>
</div>

  )
}

export default SupportCardFifth