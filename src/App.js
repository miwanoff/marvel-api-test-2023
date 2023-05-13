import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import routers
import Home from "./routers/Home";
import About from "./routers/About";
import HeroDetails from "./components/HeroDetails";

// Import components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<HeroDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
