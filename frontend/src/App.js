import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Aboutme/AboutMe";
import Tutorial from "./Components/Tutorials/Tutorial";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorial/:id" element={<Tutorial />} />
      </Routes>
    </>
  );
}

export default App;
