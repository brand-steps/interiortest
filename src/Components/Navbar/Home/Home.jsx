import React from "react";
import Navbar from "../Navbar";
import MidSec from "./MidSec/MidSec";
import MideSecond from "./MidSecond/MideSecond";
import MidCards from "./MidCards/MidCards";
import Midthird from "./MidThird/Midthird";
import SupportCards from "./SupportCards/SupportCards";
import SupportMidFour from "./SupportFourth/Support";
import SupportCardFifth from "./SupportCardFifth/SupportCard";
import SupportSixth from "./SupportSixth/SupportSixth";
import SupportSeventh from "./SupportSeventh/SupportSeventh";
import CompanyCards from "./CompanyCardEight/CompanyCards";
import SupportEight from "./SupportEight/Support";
import JoinDiscord from "./JoinDiscord/JoinDiscord";
import Footer from "./Foooter/Footer";
import FooterLasttext from "./FooterLastTE/FooterLasttext";
import Awards from "../../awards/Awards";

const Home = () => {
  return (
    <div>
      <Navbar />
      <MidSec />
      {/* <Awards /> */}
      {/* <MideSecond /> */}
      {/* <MidCards /> */}
      <div
        style={{
          backgroundColor: "#EBF4F8",
          paddingTop: "4rem ",
          paddingBottom: "100px",
        }}
      >
        <Midthird />
        <SupportCards />
      </div>
      <SupportMidFour />
      <SupportCardFifth />
      <SupportSixth />
{/*      <SupportSeventh />
      <SupportEight />
      <JoinDiscord />
      */}
      <Footer />
      {/* <FooterLasttext/>  */}
    </div>
  );
};

export default Home;
