import React from "react";
// import Test from "./components/Test";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SectionTwo from "./components/SectionTwo";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      {/* <section
        className="h-screen "
        style={{ backgroundImage: 'url("/image/homeBg.png")' }}
      >
        <Navbar />
        <Home />
      </section>
      <section>section1</section>
      <section>section2</section>
      <section>section3</section> */}
    </>
  );
};

export default App;
