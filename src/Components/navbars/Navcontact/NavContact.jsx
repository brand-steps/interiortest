import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';


const NavContact = () => {

  return (
    <Navbar fluid rounded className=' border-b-2 border-rose-500 text-black bg-amber-400 dark:bg-amber-400 h-12 '>
    <Navbar.Brand href="">
    <img src="https://www.freeiconspng.com/thumbs/phone-icon/office-phone-icon--25.png" className="mr-3 inline h-7 " alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold">0335 1329550</span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <p className='text-black'>      
 {/*}       <img src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584853.png" className="mr-3 inline h-7 " alt="Flowbite React Logo" />
     */}
     <Link to='https://www.facebook.com/MODERNDESIGNFURNISHERS9/' target='_blank'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" className="mr-3 inline h-8 " alt="Flowbite React Logo" />
        </Link>
</p>
      
    </div>
    <Navbar.Collapse>
    <Navbar.Brand >
    <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" className="mr-3 inline h-7 " alt="Flowbite React Logo" />
     <span className="self-center whitespace-nowrap text-xl font-semibold">Defence view near Iqra University, Karachi</span>
    </Navbar.Brand>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default NavContact;
