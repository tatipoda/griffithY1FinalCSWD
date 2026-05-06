import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Trainers from "./pages/Trainers";
import Membership from "./pages/Membership";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Developers from "./pages/Developers";

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
