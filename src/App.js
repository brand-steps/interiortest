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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
