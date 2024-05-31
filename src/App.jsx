import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Program from "./Pages/program";
import Galery from "./Pages/Galery";
import Contact from "./Pages/Contact";
import Pendaftaran from "./Pages/Pendaftaran";
import Admin from "./Pages/Admin";
import HomeLogin from "./Pages/HomeLogin";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/program" element={<Program />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Pendaftaran" element={<Pendaftaran />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/HomeLogin" element={<HomeLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
