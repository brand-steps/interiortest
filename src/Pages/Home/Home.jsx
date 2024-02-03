import React from 'react';
import NavbarMain from '../../Components/navbars/Navbarmain/NavbarMain';
import Corousels from '../../Components/Homecomponent/Corousel/Corousels';
import Section1 from '../../Components/Homecomponent/Section1/Section1';
import Section2 from '../../Components/Homecomponent/Section2/Section2';
import Section3 from '../../Components/Homecomponent/Section3/Section3';
import FooterBar from '../../Components/Footer/FooterBar';

const Home = () => {

  return (
    <div>
        <NavbarMain/>
        <Corousels/>
        <Section1/>
        <Section2/>
        <Section3/>
        <FooterBar/>
    </div>
  )
}

export default Home