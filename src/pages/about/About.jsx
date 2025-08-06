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
        See our <a href="https://github.com/CIDAK" className="custom-underline" target="_blank" rel="noopener noreferrer">GitHub</a> or<br />
        our <a href="https://www.linkedin.com" className="custom-underline" target="_blank" rel="noopener noreferrer">LinkedIn</a> for more
      </p>
    </div>
  );
}

export default About;
