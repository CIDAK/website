import '../../App.css';

function Join() {
  return (
    <div className="content">
      <p className="description">
        Want to join <span className="custom-underline">CIDAK</span>?<br />
        We are always looking for talented members.
      </p>
      <p className="description">
        To join, you'll need to:<br />
        1. Complete our problem set challenge.<br />
        2. Pass a second test with one of the team members.<br />
      </p>
      <p className="description">
        Best of Luck #
      </p>
      <p className="contact">
        &gt; <a href={`/static/pset-cidak-2025.zip?v=${Date.now()}`} download className="custom-underline">Download Problem Set</a><br />
      </p>
    </div>
  );
}

export default Join;
