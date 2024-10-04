import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Header/Hero";
import About from "./components/Header/About";
import Services from "./components/Header/Services";
import Portfolio from "./components/Header/Portfolio";
import Testimonials from "./components/Header/Testimonials";
import Footer from "./components/Header/Footer";
import { DarkTheme } from "./context/DarkContext";

const App: React.FC = () => {
  return (
    <DarkTheme>
      <div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default App;
