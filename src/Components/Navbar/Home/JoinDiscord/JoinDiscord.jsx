import React from 'react'

const JoinDiscord = () => {
  return (
    <div className="h-auto md:h-2/5 py-6" style={{ backgroundColor: "#045680" }}>
  <div className="flex flex-col md:flex-row">
    <p className="text-white text-xl w-full md:w-9/12 md:ml-4 mb-4 md:mb-0">
      At My Forex Funds we are always happy to hear about our prospective traders’ insights, constructive criticism and feedback. We like to know where we can improve and grow with you. Take your time and see what others are saying about us and join our discord!
    </p>
    <button style={{ backgroundColor: "#056EA3" }} className="text-white font-bold px-6 py-2 md:px-12 rounded transition duration-300 ease-in-out">
      Join Us on Discord <i className="fab fa-discord"></i>
    </button>
  </div>
</div>

  )
}

export default JoinDiscord