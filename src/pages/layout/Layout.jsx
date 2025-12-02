import { Outlet, Link } from 'react-router-dom';
import '../../App.css';

function Layout() {
  return (
    <div className="app-layout">
      <div className="left-panel">
        <div className="content">
          <Outlet />
        </div>
      </div>

      <div className="vertical-divider"></div>
      <div className="vertical-divider-2"></div>

      <Link to='/'      className='cidak-label'>CIDAK</Link>
      <Link to='/'      className='home-label'>HOME</Link>
      <Link to='/join'  className='join-label'>JOIN</Link>
    </div>
  );
}

export default Layout;


