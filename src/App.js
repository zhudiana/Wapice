import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderCollection from "./components/Header/HeaderCollection";
import BodyCollection from "./components/Body/BodyCollection";
import Body2 from "./components/Body/Body2";

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
    </div>
  );
}

export default App;
