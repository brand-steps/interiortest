import React, { useEffect } from "react"
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import StudioGallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/StudioGallery";

const StudioDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="3D Studio Designs" img="https://png.pngtree.com/background/20230521/original/pngtree-3d-studio-interior-footage-picture-image_2682932.jpg"/>
<DetailSlide heading="3D Studio Gallery" description="We offer the perfect architecture design that is eye-catching and can be termed as a valuable solution also our team has a proactive approach and our team discusses all the intricate aspects with the client when it comes to home architecture in Karachi." img1= "https://images.squarespace-cdn.com/content/v1/5963f4e8f5e23130de8f5008/1590417704686-ACJMXURBC0GYNEZOX6ME/trecs_112.jpg?format=1000w" img2="https://5.imimg.com/data5/SELLER/Default/2022/11/UT/KK/BX/23607896/music-studio-designing-service.jpg" img3="https://www.interiorzine.com/wp-content/uploads/2017/11/50-small-studio-apartment-design-ideas-modern-tiny-clever.jpg"/>
<StudioGallery/>
<FooterBar/>
</>
  )
}

export default StudioDetails;