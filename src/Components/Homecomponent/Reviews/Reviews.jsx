import React, { useEffect } from 'react';


const Reviews = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);

  return (
    <div>
        <div className='ml-4 md:ml-16 p-4 mb-8'>
  <div style={{ "textTransform": "uppercase" }} className='text-3xl md:text-3xl font-bold mt-6'>Testimonials </div>

  <div className='w-full md:w-72 border-2 border-amber-400' >
    {/* Content for the inner div */}
  </div>
</div>
<div className='mb-6'>

<div class="elfsight-app-202fc3b5-10f7-4422-aa76-21727e037f91" data-elfsight-app-lazy></div>

        </div>
    </div>
  )
}

export default Reviews