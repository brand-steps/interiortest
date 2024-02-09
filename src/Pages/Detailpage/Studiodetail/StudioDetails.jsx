import React, { useEffect } from "react"
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import StudioGallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/StudioGallery";
import intimg from '../../../Assets/studiob.jpg'

const StudioDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="3D Studio Designs" img={intimg}/>
<DetailSlide heading="Designing Studios That Spark Innovation" description="Welcome to Modern Design Furnishers, where creativity and functionality converge to craft inspiring studio spaces tailored to your unique needs. Our studio designing services offer a blend of innovation, efficiency, and aesthetic appeal, ensuring that your studio becomes a space where your creative vision can thrive. Whether you're an artist, a photographer, a musician, or a filmmaker, we are dedicated to creating studio environments that inspire creativity, productivity, and innovation."
 img1= "https://images.squarespace-cdn.com/content/v1/5963f4e8f5e23130de8f5008/1590417704686-ACJMXURBC0GYNEZOX6ME/trecs_112.jpg?format=1000w" img2="https://5.imimg.com/data5/SELLER/Default/2022/11/UT/KK/BX/23607896/music-studio-designing-service.jpg" img3="https://www.interiorzine.com/wp-content/uploads/2017/11/50-small-studio-apartment-design-ideas-modern-tiny-clever.jpg"/>
<StudioGallery/>
<FooterBar/>
</>
  )
}

export default StudioDetails;