import React, { useEffect } from "react"
import Archigallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/ArchiGallery";
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import Detailgallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/DetailGallery";
import intimg from '../../../Assets/interiorb.jpg'
const InteriorDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="interior Designs" img={intimg}/>
<DetailSlide heading="Innovative Designs, Timeless Elegance" description="Welcome to Modern Design Furnishers, where innovation meets sophistication in the realm of interior design. Our esteemed team of designers is dedicated to transforming your space into a harmonious blend of contemporary aesthetics and functional excellence. Whether you're revamping a residential abode, a commercial space, or seeking expert guidance for a renovation project, we are here to turn your vision into reality. we believe that every space has its unique personality waiting to be revealed. Our approach begins with a comprehensive understanding of your preferences, lifestyle, and aspirations for the space. Through close collaboration and attentive listening, we craft personalized design solutions tailored to your needs." img1= "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/200/2020/03/05113013/NSEC_tahi_restaurant_thumb_01.jpg" img2="https://www.ahstatic.com/photos/b9i7_ho_01_p_1024x768.jpg" img3="https://www.peerspace.com/resources/wp-content/uploads/241265959_713283363401941_2858981632523900020_n.jpg"/>
<Detailgallery/>
<FooterBar/>
</>
  )
}

export default InteriorDetails;