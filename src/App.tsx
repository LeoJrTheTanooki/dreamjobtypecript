import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./components/pages/NavbarComponent";
import HomePageComponent from "./components/pages/HomePageComponent";
import RedHatComponent from "./components/pages/RedHatComponent";
import NintendoComponent from "./components/pages/NintendoComponent";
import ValveComponent from "./components/pages/ValveComponent";
import GitLabComponent from "./components/pages/GitLabComponent";
import HumbleComponent from "./components/pages/HumbleComponent";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/redhat" element={<RedHatComponent />} />
        <Route path="/nintendo" element={<NintendoComponent />} />
        <Route path="/valve" element={<ValveComponent />} />
        <Route path="/gitlab" element={<GitLabComponent />} />
        <Route path="/humble" element={<HumbleComponent />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
