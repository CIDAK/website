import '../App.css';

function Home() {
  return (
    <div className="content">
      <p className="description">
        CIDAK is a <span className="custom-underline" onClick={() => window.open('https://london.ac.uk', '_blank')}>University of London </span>
        Computer Science society.
      </p>
      <p className="description">
        We focus on participating and<br />
        winning various hackathons.
      </p>
      <p className="contact">
        Dylan, Ian, Alex, Ken and Chey<br />
        &gt; <a href="mailto:contact@cidak.co?subject=Hello from CIDAK website" className="custom-underline">contact@cidak.co</a>
      </p>
    </div>
  );
}

export default Home; 