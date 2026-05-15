import { Routes, Route } from "react-router-dom";
import {useState} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import HomePage from "./components/pages/HomePage/HomePage";
import About from "./components/pages/About";
import Classes from "./components/pages/Classes";
import Trainers from "./components/pages/TrainersPage/Trainers";
import Membership from "./components/pages/Membership";
import Gallery from "./components/pages/Gallery/Gallery";
import Contact from "./components/pages/Contact";
import Developers from "./components/pages/Developers";
import Faqs from "./components/pages/FaqsPage/Faqs";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
  const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
  document.documentElement.setAttribute("data-theme", newTheme);
} 

  return (
    <div className="root-layout">
      <Header toggleTheme={toggleTheme} theme={theme}/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>

      <Footer theme={theme} />
    </div>
  );
}

export default App;
