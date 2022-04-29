import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import HomePage from "./components/home/HomePage";
import NavbarPage from "./components/navbar/NavbarPage";
import Portfolios from "./portfolios/Portfolios";

function App() {
  return (
    <>
      <div className="container m-auto">
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="portfolios" element={<Portfolios />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <NavbarPage />
    </>
  );
}

export default App;
