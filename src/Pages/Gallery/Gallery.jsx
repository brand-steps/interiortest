import React from 'react';
import NavbarMain from '../../Components/navbars/Navbarmain/NavbarMain';
import HeadBar from '../../Components/navbars/Headbar/HeadBar';
import OfficialGallery from '../../Components/Homecomponent/Servicedetail/DetailGallery/OfficialGallery';
import FooterBar from '../../Components/Footer/FooterBar';

const Gallery = () => {

  return (
    <div>
        <NavbarMain/>
        <HeadBar name="Our Album" img="https://www.feeta.pk/blog/wp-content/uploads/2022/04/How-To-Relish-The-Richness-Of-Dark-Interior-Design-1.jpg"/>
    <OfficialGallery/>
    <FooterBar/>
    </div>
  )
}

export default Gallery