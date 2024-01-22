import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components import
import Navbar from "./components/Navbar/Navbar";
import NavbarResponsive from "./components/NavbarResponsive/NavbarResponsive";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Growth from "./components/Growth/Growth";
import Questions from "./components/Questions/Questions";
import Programs from "./components/Programs/Programs";
import Footer from "./components/Footer/Footer";
import Login from './components/Login/Login'

// Import datas
import { programs_user } from "./constants/programs_user";
import { programs_shopper } from "./constants/programs_shopper";


const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <NavbarResponsive />
        <Hero />
        <Features />
        <Growth />
        <Questions />
        <Programs programs={programs_user} />
        <Programs programs={programs_shopper} />
        <Footer />
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>

    </BrowserRouter>

  );
};

export default App;
