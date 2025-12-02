import { Outlet } from 'react-router-dom';
import '../../App.css';

function Layout() {
  return (
    <>
      <Outlet />
      <a
        href="https://www.linkedin.com/company/cidak"
        target="_blank"
        rel="noreferrer"
        className="social-icon social-icon-linkedin"
      >
        in
      </a>
    </>
  );
}

export default Layout;


