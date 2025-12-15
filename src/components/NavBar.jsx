import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#2c3e50', padding: '1.5rem 0' }}>
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4" to="/" style={{ letterSpacing: '1px' }}>
          START FRAMEWORK
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link fw-semibold rounded px-3 py-2 ${isActive ? 'text-white' : ''}`}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#1abc9c' : 'transparent'
                })}
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link fw-semibold rounded px-3 py-2 ${isActive ? 'text-white' : ''}`}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#1abc9c' : 'transparent'
                })}
                to="/portfolio"
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link fw-semibold rounded px-3 py-2 ${isActive ? 'text-white' : ''}`}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? '#1abc9c' : 'transparent'
                })}
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
