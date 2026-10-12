import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ReachPage from './pages/ReachPage';
import CareersPage from './pages/CareersPage';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reach" element={<ReachPage />} />
          <Route path="/careers" element={<CareersPage />} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  );
}

export default App;
