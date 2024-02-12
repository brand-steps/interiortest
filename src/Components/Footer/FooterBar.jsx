import React from 'react';
import { Link } from "react-router-dom";
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../../Assets/intlogo.png'


function FooterBar() {
  return (
    <Footer container className='bg-gradient-to-b from-yellow-700 to-yellow-200 '>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <img src={logo} alt="logo" className=' sm:h-32 h-24' />

          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-16 mr-0 sm:mr-24 mt-6 sm:mt-0">

          <div>
              <Footer.Title title="Projects" className='text-black'/>
              <Footer.LinkGroup col>
                <Link to={'/Album'}>
                <Footer.Link className='text-black'>Residential</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black'>Corporate</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black'>Commercial</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black'>Retails</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black'>Studios</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black'>Rooms</Footer.Link>
                </Link>
              </Footer.LinkGroup>
            </div>

          <div>
              <Footer.Title title="Services" className='text-black'/>
              <Footer.LinkGroup col>
                <Link to={'/interiordesign'}>
                <Footer.Link className='text-black'>Interior Design</Footer.Link>
                </Link>
                <Link to={'/exteriordetails'}>
                <Footer.Link className='text-black'>Exterior Design</Footer.Link>
                </Link>
                <Link to={'/Architecturedetails'}>
                <Footer.Link className='text-black'>Construction</Footer.Link>
                </Link>
                <Link to={'/Furnituredetails'}>
                <Footer.Link className='text-black'>Furniture</Footer.Link>
                </Link>
                <Link to={'/Landscapingdetails'}>
                <Footer.Link className='text-black'>Gardening</Footer.Link>
                </Link>
                <Link to={'/Studiodetails'}>
                <Footer.Link className='text-black'>3D Studio</Footer.Link>
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="about" className='text-black'/>
              <Footer.LinkGroup col>
                <Link to={'/About'}>
                <Footer.Link className='text-black'>About Us</Footer.Link>
                </Link>
                <Link to={'/'}>
                <Footer.Link className='text-black'>Home</Footer.Link>
                </Link>
                <Link to={'/Album'}>
                <Footer.Link className='text-black'>Gallery</Footer.Link>
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className='text-black'/>
              <Footer.LinkGroup col>
               {/* <Footer.Link href="#"className='text-black'>Instagram</Footer.Link> */}
               <Link to='https://www.facebook.com/MODERNDESIGNFURNISHERS9/' target='_blank'>
                <Footer.Link  className='text-black'>Facebook</Footer.Link>
                </Link>
                <Footer.Link  className='text-black'>Instagram</Footer.Link>
                <Footer.Link  className='text-black'>Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            {/*}
            <div>
              <Footer.Title title="Legal" className='text-black' />
              <Footer.LinkGroup col>
                <Link to='/privacypolicy'>
                <Footer.Link className='text-black'>Privacy Policy</Footer.Link> </Link>
                <Link to='/terms&conditon'>
                <Footer.Link className='text-black'>Terms &amp; Conditions</Footer.Link></Link>
              </Footer.LinkGroup>
            </div>
*/}
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Link to='https://londonlogodesigners.co.uk/'>
          <Footer.Copyright by="LondonLogoDesigners" year={2024} className='text-black' />
          </Link>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
           {/*} <Footer.Icon href="#" icon={BsFacebook} className='headcolors'/>
            <Footer.Icon href="#" icon={BsInstagram} className='headcolors' />
            <Footer.Icon href="#" icon={BsTwitter} className='headcolors' />
            <Footer.Icon href="#" icon={BsGithub} className='headcolors'/>
<Footer.Icon href="#" icon={BsDribbble} className='headcolors'/> 
        <img src={insta} className="mr-3 inline h-7 " alt="Flowbite React Logo" />
        <img src={phone} className="mr-3 inline h-7 " alt="Flowbite React Logo" /> */}
       <a href="https://www.facebook.com/MODERNDESIGNFURNISHERS9/" target='_blank'> <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" className="mr-3 inline h-7 " alt="Facebook logo" /></a>
       <a href="https://www.facebook.com/MODERNDESIGNFURNISHERS9/" target='_blank'> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" className="mr-3 inline h-7 " alt="Facebook logo" /></a>
       <a href="https://www.facebook.com/MODERNDESIGNFURNISHERS9/" target='_blank'> <img src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png" className="mr-3 inline h-7 " alt="Facebook logo" /></a>

          </div>
        </div>
      </div>
    </Footer>
  );
}

export default FooterBar;
