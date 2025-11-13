import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Itinerary from './pages/Itinerary';
import FAQs from './pages/FAQs';
import DressCode from './pages/DressCode';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/dresscode" element={<DressCode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
