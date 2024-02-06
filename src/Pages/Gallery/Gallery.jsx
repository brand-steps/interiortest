import React, { useEffect } from 'react';
import NavbarMain from '../../Components/navbars/Navbarmain/NavbarMain';
import HeadBar from '../../Components/navbars/Headbar/HeadBar';
import OfficialGallery from '../../Components/Homecomponent/Servicedetail/DetailGallery/OfficialGallery';
import FooterBar from '../../Components/Footer/FooterBar';
import ResidentialGallery from '../../Components/Homecomponent/Projectgallery/ResidentialGallery';
import CommercialGallery from '../../Components/Homecomponent/Projectgallery/CommercialGallery';
import CorporateGallery from '../../Components/Homecomponent/Projectgallery/CorporateGallery';
import RetailGallery from '../../Components/Homecomponent/Projectgallery/RetailGallery';
import StudioProject from '../../Components/Homecomponent/Projectgallery/Studioproject';
import RoomGallery from '../../Components/Homecomponent/Projectgallery/Roomgallery';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
        <NavbarMain/>
        <HeadBar name="Our Album" img="https://www.feeta.pk/blog/wp-content/uploads/2022/04/How-To-Relish-The-Richness-Of-Dark-Interior-Design-1.jpg"/>
    <ResidentialGallery/>
    <CommercialGallery/>
    <CorporateGallery/>
    <RetailGallery/>
    <StudioProject/>
    <RoomGallery/>
    <FooterBar/>
    </div>
  )
}

export default Gallery