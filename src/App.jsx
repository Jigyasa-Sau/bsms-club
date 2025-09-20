import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import BioClub from "./pages/BioClub";   // ✅ updated here
import Events from "./pages/Events";
import Membership from "./pages/Membership";
import ContactTeam from "./pages/ContactTeam";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home key="home" />} />
            <Route path="/bioclub" element={<BioClub />} />   {/* ✅ updated route */}
            <Route path="/events" element={<Events />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/contact" element={<ContactTeam />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
