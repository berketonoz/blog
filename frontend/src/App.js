import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/Aboutme/AboutMe";
import Article from "./Components/Articles/Article";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/blog" element={<Home />} />
      <Route path="/article/:id" element={<Article />} />
    </Routes>
    </>
  );
}

export default App;
