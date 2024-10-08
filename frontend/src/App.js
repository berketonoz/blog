import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Aboutme/AboutMe";
import Footer from "./Components/Footer/Footer";
import Tutorial from "./Components/Tutorials/Tutorial";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorial/:id" element={<Tutorial />} />
      </Routes>
    </>
  );
}

export default App;
