import React, { useEffect } from "react"
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import Exteriorgallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/ExteriorGallery";
import imgs from '../../../Assets/exteriorb.jpg'

const ExteriorDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="Exterior Designs" img={imgs}/>
<DetailSlide heading="Designing Your Outdoor Escape" description="Welcome to Modern Design Furnishers, where the beauty of modern design seamlessly extends beyond interior spaces to transform the exterior landscapes. Our dedicated team of designers brings creativity, innovation, and expertise to every outdoor project, whether it's a residential garden, commercial courtyard, or urban rooftop oasis. With a keen eye for detail and a commitment to excellence, we are here to redefine outdoor living and enhance the curb appeal of your property. we understand that the exterior of your property is just as important as the interior. Our approach to exterior design begins with a thorough understanding of your needs, preferences, and the unique characteristics of your outdoor space. "
 img1= "https://www.styleyourspace.pk/images/services/service-single/exterior-design.jpg" img2="https://www.styleyourspace.pk/images/services/service-single/design-5.jpg" img3="https://amazingarchitecture.com/storage/1488/moder_house_night_illumination.jpg"/>
<Exteriorgallery/>
<FooterBar/>
</>
  )
}

export default ExteriorDetails;