import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Home />} />
      <Route path="/blog" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
