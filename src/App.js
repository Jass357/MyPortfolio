import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Projects />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Contact />} />
          <Route path="/" element={<Skills />} />
          

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
