import './App.css';

function App() {
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
            win various hackathons of all caliber.

          </p>
          <p className="contact">
            Dylan, Ian, Alex, Ken and Chey<br />
            &gt; <a href="mailto:contact@cidak.co?subject=Hello from CIDAK website" className="custom-underline">contact@cidak.co</a>
          </p>
        </div>
      </div>
      
      <div className="vertical-divider"></div>
      <div className="vertical-divider-2"></div>

      <div className="right-panel">
      </div>
    </div>
  );
};

export default App;
