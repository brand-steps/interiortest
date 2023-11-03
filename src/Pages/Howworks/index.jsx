import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './howowrks.css';
import Footer from '../../Components/Navbar/Home/Foooter/Footer';

const Howwork = () => {



  const divStyle = {
    backgroundImage: "url('https://www.osimo.com.tr/assets/images/media-bg.jpg')",
    /* Other styles you might want to apply */
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '8px',
    width: '1100px', // Adjust the width as needed
    marginBottom: '30px',
    // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
  };

  const imageStyle = {
    width: '500px',
    height: '500px',
    marginBottom: '16px',
  };



  return (
    <>
    <Navbar/>
    <div className='flex  justify-evenly flex-wrap my-4' >
      <div style={containerStyle}>
        <h1 className='heads'>How It Works?</h1>
        <p>Obtaining an Account does not mean that cooperation between the trader and our project will 
            not develop any further. Quite the contrary, on this page, you will see what the increments principles are. A higher account 
            balance provides the trader with the opportunity to scale up the positions accordingly, while not 
            taking higher risks. Remember, our project has the same goal as you.
            <br/><br/>
            Myforex competition create groups of traders randomly, with no more than 10 participants,
             ranging from basic to professional levels. Each trader pays a registration fee, and the top 3 
             traders who generate the highest profits are rewarded. But here's the interesting part: the losses
              of certain traders become the profits for the winners! There are no strict rules on maximum or 
              daily drawdown, and you can trade in any way you prefer, including news trading. Additionally, 
              there are different account sizes for each competition level, such as a $10,000 account size for
               the basic model, a $25,000 account size for the amateur model, and a $50,000 account size for the
                advanced model. It's a thrilling opportunity to showcase your trading skills and potentially 
                earn some amazing rewards. Get ready to dive into the world of myforex competition and let the 
                trading adventure begin!
               </p>
      </div>

      


      
    </div>
    <Footer/>
    </>
  );
}

export default Howwork;
