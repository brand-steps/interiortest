import React from "react"
import NavbarMain from "../../Components/navbars/Navbarmain/NavbarMain";
import FooterBar from "../../Components/Footer/FooterBar";
import HeadBar from "../../Components/navbars/Headbar/HeadBar";
import AboutChoose from "../../Components/Aboutcomponent/Aboutchoose";

const About = () => {
    
      const imageStyle = {
        width: '500px',
        height: '400px',
        marginBottom: '16px',
      };
      const containerStyle2 = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '12px',
        justifyContent: 'center',
        padding: '6px',
        width: '650px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    

  return (
    <>
    <NavbarMain/>

<HeadBar name="About Us" img="https://www.feeta.pk/blog/wp-content/uploads/2022/04/How-To-Relish-The-Richness-Of-Dark-Interior-Design-1.jpg"/>
    <div className='flex  justify-center flex-wrap my-4' >
    <div style={containerStyle2}>
        <h1 className="text-3xl font-bold mb-4 mt-3">Our entire way of working is shaped by what you need and want.</h1>
        <p className="text-black text-base ">We are a reputed firm providing construction and interior design services. We hold expertise in creating designs that can offer value to our customers. Our interior design can truly elevate the spirit as well. Our team strives to come up with the best energy and money saving techniques.</p>
        <p className="text-black text-base mt-4 mb-3">We ensure that we render images for our clients so that they can get to see the complete design. What you will like about our service is that our work can be termed as architecturally accurate and it is quite detailed also.</p>

      </div>
      <div style={containerStyle2}>
      <img src="https://media.designcafe.com/wp-content/uploads/2020/07/23154645/best-interior-designers-living-room-designs.jpg" alt="img" style={imageStyle} />

      </div>

      <div style={containerStyle2}>
      <img src="https://hips.hearstapps.com/hmg-prod/images/interior-design-ideas-idea-9-dwell-1-1644331792.jpg" alt="img" style={imageStyle} />

      </div>
      <div style={containerStyle2}>
        <h1 className="text-3xl font-bold mb-4 mt-3">Who We Are</h1>
        <p className="text-black text-base ">If you want to give your ideas a realistic perception, then we are the right people to contact. We are a team that does not believe in compromising on quality. Our team believes in thinking out of the box and we go the extra mile to achieve our objectives.

We are truly evolving with the passage of time and we believe that we have a bright future ahead because we have got exciting concepts and ideas to offer. This is why you should get in touch with us right away to avail our interior design services.


</p>
        <p className="text-black text-base mt-4 mb-3">We are truly evolving with the passage of time and we believe that we have a bright future ahead because we have got exciting concepts and ideas to offer. This is why you should get in touch with us right away to avail our interior design services.

</p>

      </div>
    </div>
<AboutChoose/>

    <FooterBar/>
    </>
  )
}

export default About;