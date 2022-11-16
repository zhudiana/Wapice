import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderCollection from "./components/Header/HeaderCollection";
import BodyCollection from "./components/Body/BodyCollection";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import { SliderData } from "./components/ImageSlider/SliderData";
import Services from "./components/Services/Services";
import Summium from "./components/Summium/Summium";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeaderCollection />} />
        </Routes>
        <Routes>
          <Route path="/" element={<BodyCollection />} />
        </Routes>
      </BrowserRouter>
      <ImageSlider slides={SliderData} />
      <Services />
      <Summium />
    </div>
  );
}

export default App;
