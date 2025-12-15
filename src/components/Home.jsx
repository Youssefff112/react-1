import avatarImg from '../assets/images/avataaars.svg';

export default function Home() {
  return (
    <section className="d-flex align-items-center justify-content-center" style={{ 
      background: 'linear-gradient(135deg, #1abc9c 0%, #16a085 100%)', 
      minHeight: 'calc(100vh - 76px)',
      padding: '2rem'
    }}>
      <div className="text-center text-white" style={{ maxWidth: '500px' }}>
        <div className="mx-auto mb-4" style={{ 
          width: '250px', 
          height: '250px'
        }}>
          <img src={avatarImg} alt="Avatar" className="w-100 h-100" />
        </div>
        <h1 className="fw-bold" style={{ fontSize: '3rem', letterSpacing: '2px', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>
          START FRAMEWORK
        </h1>
        <div className="d-flex align-items-center justify-content-center gap-3 my-3" style={{ fontSize: '1.5rem' }}>
          <span>—</span>
          <i className="fas fa-star"></i>
          <span>—</span>
        </div>
        <p className="m-0 fw-medium" style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </section>
  );
}
