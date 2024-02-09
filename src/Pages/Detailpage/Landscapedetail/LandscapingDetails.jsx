import React, { useEffect } from "react"
import Archigallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/ArchiGallery";
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import LandscapeGallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/LandscapeGallery";
import intimg from '../../../Assets/scapeb.jpg'

const LandscapingDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="Gardening Landscaping" img={intimg}/>
<DetailSlide heading="Where Beauty Blooms and Serenity Grows" description="Welcome to Modern Design Furnishers, where we extend our expertise beyond interior spaces to transform outdoor environments into stunning garden landscapes. Our gardening landscaping services offer a harmonious fusion of nature and design, creating picturesque outdoor retreats that enhance the beauty and functionality of your property. With a passion for horticulture and a commitment to excellence, our team of landscape architects and gardeners is dedicated to bringing your outdoor vision to life." 
img1= "https://www.styleyourspace.pk/images/services/service-single/design-21.jpg" img2="https://homeworlddesign.com/wp-content/uploads/2015/06/Spectacular-outdoor-design-project.jpg" img3="https://melbourne.poolandoutdoordesign.com.au/wp-content/uploads/2020/08/Signature-Landscapes-Web-2-400x284.jpg"/>
<LandscapeGallery/>
<FooterBar/>
</>
  )
}

export default LandscapingDetails;