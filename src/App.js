import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Grid3D from './components/Grid3D';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Grid3D />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
