import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="d-flex align-items-center justify-content-center" style={{ 
      minHeight: 'calc(100vh - 76px)',
      backgroundColor: '#fff'
    }}>
      <div className="text-center" style={{ maxWidth: '600px', padding: '2rem' }}>
        <h1 className="fw-bold mb-4" style={{ fontSize: '8rem', color: '#2c3e50' }}>404</h1>
        <h2 className="fw-bold fs-1 text-uppercase mb-3" style={{ color: '#2c3e50' }}>Page Not Found</h2>
        <div className="d-flex align-items-center justify-content-center gap-3 mb-4" style={{ fontSize: '1.5rem', color: '#2c3e50' }}>
          <span>—</span>
          <i className="fas fa-star"></i>
          <span>—</span>
        </div>
        <p className="text-muted mb-4" style={{ fontSize: '1.1rem' }}>
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="btn btn-lg text-white fw-semibold px-4"
          style={{ backgroundColor: '#1abc9c', textDecoration: 'none' }}
        >
          <i className="fas fa-home me-2"></i>
          Back to Home
        </Link>
      </div>
    </section>
  );
}
