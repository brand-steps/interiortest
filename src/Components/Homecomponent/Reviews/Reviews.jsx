import React from 'react';


const Reviews = () => {

  return (
    <div>
        <div className='ml-4 md:ml-16 p-4 mb-8'>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl md:text-3xl font-bold mt-6'>Testimonials </div>

  <div className='w-full md:w-72 border-2 border-amber-400' >
    {/* Content for the inner div */}
  </div>
</div>
<div className='mb-6'>
        <iframe src='https://widgets.sociablekit.com/google-reviews/iframe/25360267' frameborder='0' width='100%' height='500'></iframe>
        </div>
    </div>
  )
}

export default Reviews