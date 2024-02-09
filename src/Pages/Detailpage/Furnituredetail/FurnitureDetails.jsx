import React, { useEffect } from "react"
import NavbarMain from "../../../Components/navbars/Navbarmain/NavbarMain";
import HeadBar from "../../../Components/navbars/Headbar/HeadBar";
import DetailSlide from "../../../Components/Homecomponent/Servicedetail/Detailslide/DetailSlider";
import FooterBar from "../../../Components/Footer/FooterBar";
import FurniGallery from "../../../Components/Homecomponent/Servicedetail/DetailGallery/FurniGallery";
import imgs from '../../../Assets/furnib.jpg'

const FurnitureDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
<>
<NavbarMain/>
<HeadBar name="Custom Furniture" img={imgs}/>
<DetailSlide heading="Elevate Your Space with Custom Craftsmanship" description="Welcome to Modern Design Furnishers, where luxury meets craftsmanship in the realm of custom furniture design. Our bespoke furniture services offer discerning clients the opportunity to create truly unique pieces that reflect their individual style, taste, and personality. From concept to creation, our team of skilled artisans and designers is dedicated to bringing your vision to life with impeccable craftsmanship and attention to detail." img1= "https://img.freepik.com/premium-photo/interior-design-bedroom-with-walls-dark-tone-generative-ai_62294-518.jpg" img2="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/321945737/original/f7b06e90e32fc6b2cb76364cd942cbef3faa22ca/design-and-render-your-dream-interior-space.jpeg" img3="https://static.wixstatic.com/media/bf8702_6628f97c1e3c4690938b239e6274c43f~mv2.jpg/v1/fill/w_738,h_511,al_c,q_85,enc_auto/bf8702_6628f97c1e3c4690938b239e6274c43f~mv2.jpg"/>
<FurniGallery/>
<FooterBar/>
</>
  )
}

export default FurnitureDetails;