import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import insta from '../../../Assets/insta.png'
import phone from '../../../Assets/phone.png'
import face from '../../../Assets/face.png'
import insta2 from '../../../Assets/instared.png'
import face2 from '../../../Assets/face2.png'
import phones from '../../../Assets/phones.png'
import addr from '../../../Assets/addr.webp'

const NavContact = () => {
let csss = "border-b-2 border-rose-500 text-black bg-gradient-to-r from-yellow-700 to-yellow-200"

  return (
    <Navbar fluid rounded className='border-b-2 border-rose-500 text-black bg-white dark:bg-white '>
    
    <Navbar.Brand href="">
    <img src={phones} className="mr-3 inline h-7 " alt="phone" />
      <span className="self-center whitespace-nowrap text-xs font-semibold font-sans">Call Anytime <br /> <p className='text-lg font-sans'> 0335 1329550 </p></span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <p className='text-black'>      
        <img src={insta2} className="mr-3 inline h-7 " alt="Flowbite React Logo" />
     
     <Link to='https://www.facebook.com/MODERNDESIGNFURNISHERS9/' target='_blank'>
        <img src={face2} className="mr-3 inline h-8 " alt="Flowbite React Logo" />
        </Link>

</p>
      
    </div>
    <Navbar.Collapse>
    <Navbar.Brand >
    <img src={addr} className="mr-3 inline h-7 " alt="Flowbite React Logo" />
     <span className="self-center whitespace-nowrap text-xl font-medium font-serif">Defence view near Iqra University, Karachi</span>
    </Navbar.Brand>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavContact;
