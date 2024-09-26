import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/Aboutme/AboutMe";
import Article from "./Components/Articles/Article";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/blog" element={<Home />} />
      <Route path="/blog/about" element={<About />} />
      <Route path="/blog/article/:id" element={<Article />} />
    </Routes>
    </>
  );
}

export default App;
