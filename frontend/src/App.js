import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Aboutme/AboutMe";
import Tutorial from "./Components/Tutorials/Tutorial";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.transition = "background-color 0.4s ease-in-out";
    document.body.style.backgroundColor = darkMode ? "#212529": "#f9f9f9";
  },[darkMode])

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorial/:id" element={<Tutorial darkMode={darkMode}/>} />
      </Routes>
    </>
  );
}

export default App;
