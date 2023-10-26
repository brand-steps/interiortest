import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Navbar/Home/Home";
import FAQ from "../src/Pages/FAQ/FAQ";
import Testimonials from "../src/Pages/Testimonials/Testimonials";
import Careers from "../src/Pages/Careers/Careers";
import Signup from "./Pages/Siginup/Signup";
import Login from "./Pages/Login/Login";
import Howwork from "./Pages/Howworks";
import ABoutus from "./Pages/Aboutus/ABoutus";
import BuyBasic from "./Pages/Buypages/BuyBasic";
import BuyAmateur from "./Pages/Buypages/BuyAmateur";
import BuyProfessional from "./Pages/Buypages/Buyprofessional";
import Leaderboard from "./Pages/Clientarea/Leaderboard";
import Addimage from "./Pages/Addimage/Addimage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/FAQ"} element={<FAQ />} />
          <Route path={"/Testimonials"} element={<Testimonials />} />
          <Route path={"/Signup"} element={<Signup />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/Howworks"} element={<Howwork />} />
          <Route path={"/Aboutus"} element={<ABoutus />} />
          <Route path={"/BuyBasic"} element={<BuyBasic />} />
          <Route path={"/BuyAmateur"} element={<BuyAmateur />} />
          <Route path={"/BuyProfessional"} element={<BuyProfessional />} />
          <Route path={"/Clientarea"} element={<Leaderboard />} />
          <Route path={"/Addimage"} element={<Addimage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
