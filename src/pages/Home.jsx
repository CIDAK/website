import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  return (
    <div className="page-root">
      {/* Decorative halftone accents */}
      <div className="halftone-accent halftone-accent--top-left" />
      <div className="halftone-accent halftone-accent--bottom-right" />
      
      {/* Floating geometric shapes */}
      <div className="geo-shape geo-shape--triangle" />
      <div className="geo-shape geo-shape--square" />

      <main className="letter">
        <header className="letter-header">
          <div className="letter-title">CIDAK</div>
          <div className="letter-pill">BUILD</div>
        </header>

        <section className="letter-body">
          <p>
            <strong>This is for people who like building things that do not exist yet.</strong>
          </p>
          <p>
            We spend most of our time preparing for and shipping projects at
            hackathons, from small weekend sprints to longer competitions. The
            work is opinionated, fast and collaborative.
          </p>
          <p>
            If you are curious, rigorous and enjoy turning vague ideas into
            running systems, you might enjoy being here.
          </p>
        </section>

        <footer className="letter-footer">
          <div className="letter-tagline">
            Chey, Ian, Dylan, Alex, Josephine, Jayden, TK, Ken ...
            <br />
            <span style={{ opacity: 0.6 }}>&gt;</span>{' '}
            <a
              href="mailto:contact@cidak.co?subject=Hello from CIDAK website"
              className="custom-underline"
            >
              contact@cidak.co
            </a>
          </div>

          <div className="button-row">
            <Link to="/join" className="ghost-button">
              <span>Join Us</span>
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;