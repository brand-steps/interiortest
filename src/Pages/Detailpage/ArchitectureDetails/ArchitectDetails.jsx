import React, { useEffect } from "react"
import Archigallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/ArchiGallery";
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import intimg from '../../../Assets/archib.jpg'

const ArchitectDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="Architecture Designs" img={intimg}/>
<DetailSlide heading="Designing Tomorrow's Landmarks, Today" description="Welcome to Modern Design Furnishers, your premier destination for comprehensive interior architecture and construction services. We specialize in creating innovative and functional spaces that elevate the way you live, work, and interact. With a dedicated team of architects, engineers, and craftsmen, we offer end-to-end solutions tailored to your unique needs and aspirations." img1= "https://www.styleyourspace.pk/images/services/service-single/architecture-design.jpg" img2="https://www.classicalbaths.co.uk/cdn/shop/products/CE11001MB-Charlotte-Edwards-Mayfair-1500x780mm-Small-Freestanding-Bath-with-Matt-Black-Exterior_580x.jpg?v=1615152449" img3="https://img.freepik.com/premium-photo/interior-design-bedroom-with-walls-dark-tone_62294-1125.jpg"/>
<Archigallery/>
<FooterBar/>
</>
  )
}

export default ArchitectDetails;