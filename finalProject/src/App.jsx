import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import Classes from "./components/pages/Classes";
import Trainers from "./components/pages/Trainers";
import Membership from "./components/pages/Membership";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Developers from "./components/pages/Developers";

import "./App.css";

function App() {
  return (
    <div className="root-layout">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
