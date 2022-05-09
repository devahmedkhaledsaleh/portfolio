import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Portfolios from "./components/portfolios/Portfolios";

function App() {
  return (
    <>
      <div className="container m-auto">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolios" element={<Portfolios />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Navbar />
    </>
  );
}

export default App;
