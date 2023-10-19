import React from 'react'
import bull from '../../../Images/My FPrec Competition bull blue-01.png'
import CompanyCards from '../CompanyCardEight/CompanyCards'
const SupportSeventh = () => {
  return (
    <div     style={{"backgroundColor" : "#EDF2FF"}}  className='py-6 mt-4'    >
<div class="flex flex-col items-center justify-center my-8 px-4 md:px-8 lg:px-16">
                <div class="text-center">
                    <h1 class="text-2xl text-blue-950	 md:text-4xl lg:text-5xl font-bold my-2">Latest FOREX & Company News</h1>
                    <img class="w-full max-w-lg mx-auto my-4 md:my-6 lg:my-8" src={bull} alt="" />
                   
                </div>
            </div>

            <CompanyCards/>
        
    </div>
  )
}

export default SupportSeventh