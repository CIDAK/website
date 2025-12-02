import '../App.css';

function Home() {
  return (
    <div className="page-root">
      <main className="letter shadowed">
        <header className="letter-header">
          <h1 className="letter-title">CIDAK</h1>
        </header>

        <section className="letter-body">
          <p>
            CIDAK is for people who
            like building things that do not exist yet.
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
            Chey, Ian, Dylan, Alex , Josephine, Jayden, TK, Ken ... 
            <br />
            &gt;{' '}
            <a
              href="mailto:contact@cidak.co?subject=Hello from CIDAK website"
              className="custom-underline"
            >
              contact@cidak.co
            </a>
          </div>

          <div className="button-row">
            <a
              href="/join"
              className="ghost-button shadowed"
            >
              <span>Join CIDAK</span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Home;