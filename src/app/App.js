import React, { useState ,useEffect } from "react";
import {HeaderTop}from "../components";
import {Post} from "../components";
import Home from "../pages/home";
import Elements from "../pages/themeElement";
import Services from "../components/sections/services";
import Skills from "../pages/about";

import Contactme from "../pages/contactme";
import Contact from "../pages/contact";
import { useLocation } from "react-router-dom";
import './App.scss';
import Blog from "../pages/blog";


import { BrowserRouter, Routes, Route,Switch } from "react-router-dom";

const ScrollToTop =() => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <>
        <BrowserRouter>
        <ScrollToTop />
        <div className="rs-content">
        <HeaderTop logotext="UBAI MUTL" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/elements" element={<Elements />} />
            <Route path="/about" element={<Skills />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contactme" element={<Contactme />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post" element={<Post />} />
            <Route path="*" element={<Home />} />
          </Routes>
          </div>
        </BrowserRouter>
     </>
  )
};

export default App;
