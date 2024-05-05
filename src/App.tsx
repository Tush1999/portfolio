import { Routes, Route } from "react-router-dom";

import About from "./components/about";
import Header from "./components/header";
import Home from "./components/home"
import Career from "./components/career";
import NotFound from "./components/not-found";
import Contact from "./components/contact";
import Footer from "./components/footer"

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
