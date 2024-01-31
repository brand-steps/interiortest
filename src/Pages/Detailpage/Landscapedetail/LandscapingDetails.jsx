import React, { useEffect } from "react"
import Archigallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/ArchiGallery";
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import LandscapeGallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/LandscapeGallery";

const LandscapingDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="Gardening Landscaping" img="https://i.pinimg.com/originals/64/41/b9/6441b994edbd71f2754c17fb733af948.jpg"/>
<DetailSlide heading="PROFESSIONAL GARDENING LANDSCAPING SERVICES IN KARACHI" description="Style Your Space is one of the leaders in gardening landscaping. What gives our team an edge is that we can stick to your budget and deliver right on time. We have a proven record of providing quality garden landscape design.

The best part is that we make use of the cutting edge technology to facilitate the work at every step. We can sketch the perfect plan and come up with the best 3D model. The benefit of the 3d model is that it becomes easier for you to visualize how your piece of land will look." img1= "https://www.styleyourspace.pk/images/services/service-single/design-21.jpg" img2="https://homeworlddesign.com/wp-content/uploads/2015/06/Spectacular-outdoor-design-project.jpg" img3="https://melbourne.poolandoutdoordesign.com.au/wp-content/uploads/2020/08/Signature-Landscapes-Web-2-400x284.jpg"/>
<LandscapeGallery/>
<FooterBar/>
</>
  )
}

export default LandscapingDetails;