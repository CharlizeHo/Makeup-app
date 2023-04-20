import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Navbar from "./layouts/Navbar";
import Products from "./pages/Products";
import About from "./pages/About";
import MyCart from "./pages/MyCart";
import Footer from "./layouts/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<RootLayout />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/MyCart" element={<MyCart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
