import React, { useEffect } from "react"
import Archigallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/ArchiGallery";
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";

const ArchitectDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="Architecture Designs" img="https://i.redd.it/zv5bj63bdegb1.jpg"/>
<DetailSlide heading="ARCHITECTURE DESIGN IS A VISUAL ART, AND THE BUILDINGS SPEAK FOR THEMSELVES." description="We offer the perfect architecture design that is eye-catching and can be termed as a valuable solution also our team has a proactive approach and our team discusses all the intricate aspects with the client when it comes to home architecture in Karachi." img1= "https://www.styleyourspace.pk/images/services/service-single/architecture-design.jpg" img2="https://www.classicalbaths.co.uk/cdn/shop/products/CE11001MB-Charlotte-Edwards-Mayfair-1500x780mm-Small-Freestanding-Bath-with-Matt-Black-Exterior_580x.jpg?v=1615152449" img3="https://img.freepik.com/premium-photo/interior-design-bedroom-with-walls-dark-tone_62294-1125.jpg"/>
<Archigallery/>
<FooterBar/>
</>
  )
}

export default ArchitectDetails;