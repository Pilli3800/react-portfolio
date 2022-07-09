import "./App.css";
import { Navigate, Route } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import { Works } from "./pages/Works";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <SlideRoutes basename={process.env.PUBLIC_URL}>
        <Route index path="/react-portfolio" element={<Hero />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/react-portfolio"/>} />
      </SlideRoutes>
    </>
  );
}

export default App;
