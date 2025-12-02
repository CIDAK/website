import '../../App.css';

function Join() {
  const problemSetHref = `/static/pset-cidak-2025.zip?v=${Date.now()}`;

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
          <div className="letter-title">JOIN</div>
          <div className="letter-pill">APPLY</div>
        </header>

        <section className="letter-body">
          <p>
            <strong>Joining the group starts with a small problem set.</strong> It is designed to
            be straightforward but unforgiving: we care more about how you think
            than how many tools you know.
          </p>
          <p>
            Solve the tasks on your own, write code you are happy to defend,
            and include any notes or tradeoffs you considered. After reviewing
            your submission we may invite you for a short technical
            conversation with one of the team.
          </p>
          <p>There is no deadline, but we read every serious attempt.</p>
        </section>

        <footer className="letter-footer">
          <div className="letter-tagline">
            <span style={{ opacity: 0.6 }}>&gt;</span> When you are ready, send your solutions to{' '}
            <a
              href="mailto:contact@cidak.co?subject=CIDAK problem set submission"
              className="custom-underline"
            >
              contact@cidak.co
            </a>
            <span className="code-chip" style={{ marginLeft: '0.5rem' }}>pset</span>
          </div>

          <div className="button-row">
            <a
              href={problemSetHref}
              download
              className="ghost-button"
            >
              <span>Download Problem Set</span>
            </a>
            <a href="/" className="ghost-button" style={{ background: 'transparent' }}>
              <span>Back Home</span>
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Join;
