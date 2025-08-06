import './App.css';
import { AsciiAnimation } from './AsciiAnimation';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import Join from './pages/join/Join';

function Home() {
  return (
    <div className="app-layout">
      <div className="left-panel">
        <div className="content">
          <p className="description">
            CIDAK is <span className="custom-underline" onClick={() => window.open('https://london.ac.uk', '_blank')}>University of London</span> Computer Science<br />
            society.
          </p>
          <p className="description">
            Our focus is to participate and<br />
            win various hackathons. 
          </p>
          <p className="contact">
            Dylan, Ian, Alex, Ken and Chey<br />
            &gt; <a href="mailto:contact@cidak.co?subject=Hello from CIDAK website" className="custom-underline">contact@cidak.co</a>
          </p>
        </div>
      </div>
      
      <div className="vertical-divider"></div>
      <div className="vertical-divider-2"></div>

      <div className="cidak-label">CIDAK</div>
      <Link to='/about' className="about-label">ABOUT</Link>

      <div className="right-panel">
        <AsciiAnimation />
      </div>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/join" element={<About />} />

    </Routes>
  );
}

export default App;
