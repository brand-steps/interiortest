import ArchitectDetails from "./Pages/Detailpage/ArchitectureDetails/ArchitectDetails";
import ExteriorDetails from "./Pages/Detailpage/Exteriordetails/ExteriorDetails";
import FurnitureDetails from "./Pages/Detailpage/Furnituredetail/FurnitureDetails";
import InteriorDetails from "./Pages/Detailpage/Interiordetails/InteriorDetails";
import LandscapingDetails from "./Pages/Detailpage/Landscapedetail/LandscapingDetails";
import StudioDetails from "./Pages/Detailpage/Studiodetail/StudioDetails";
import Gallery from "./Pages/Gallery/Gallery";
import Home from "./Pages/Home/Home";
import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Architecturedetails"} element={<ArchitectDetails />} />
          <Route path={"/interiordesign"} element={<InteriorDetails />} />
          <Route path={"/exteriordetails"} element={<ExteriorDetails />} />
          <Route path={"/Furnituredetails"} element={<FurnitureDetails />} />
          <Route path={"/Landscapingdetails"} element={<LandscapingDetails />} />
          <Route path={"/Studiodetails"} element={<StudioDetails />} />
          <Route path={"/Album"} element={<Gallery />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
