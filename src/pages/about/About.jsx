import '../../App.css';
import './About.css';
import { AsciiAnimation } from '../../AsciiAnimation';
import { Link } from 'react-router-dom';

function About() {
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

      <div className='cidak-label'>CIDAK</div>
      <Link to='/' className="about-label">HOME</Link>
      <Link to='/join' className="join-label">JOIN</Link>

      <div className="right-panel">
        <AsciiAnimation />
      </div>
    </div>
  );
};

export default About;
