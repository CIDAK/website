import '../../App.css';

function About() {
  return (
    <div className="content">
      <p className="description">
        CIDAK members are from around the world. Locations such as
        Singapore, South Africa, Brazil, United States and England.
      </p>
      <p className="description">
        We are a group of talented<br />
        individuals who strive to make the world 
        a better place. 
      </p>
      <p className="description">
        See our <span className="custom-underline" onClick={() => window.open('https://github.com/CIDAK', '_blank')}>Github</span> or<br />
        our <span className="custom-underline" onClick={() => window.open('https://www.linkedin.com', '_blank')}>LinkedIn</span> for more
      </p>
    </div>
  );
}

export default About;
