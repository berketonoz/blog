import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Home />} />
      <Route path="/blog" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
