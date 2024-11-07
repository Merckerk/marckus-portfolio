/**
 * @copyright 2024 Marckus Rey C. Santiago
 * @license Apache-2.0
 */

import React from "react";
import { ReactLenis } from 'lenis/react';

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Lenis from "lenis";

const App = () => {
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
};

export default App;
