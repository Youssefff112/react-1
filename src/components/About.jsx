export default function About() {
  return (
    <section className="py-5 d-flex align-items-center" style={{ 
      background: 'linear-gradient(135deg, #1abc9c 0%, #16a085 100%)',
      minHeight: 'calc(100vh - 76px)' 
    }}>
      <div className="container">
        <div className="text-center text-white mb-5">
          <h2 className="fw-bold fs-1 text-uppercase mb-3">ABOUT COMPONENT</h2>
          <div className="d-flex align-items-center justify-content-center gap-3 mb-4" style={{ fontSize: '1.5rem' }}>
            <span>—</span>
            <i className="fas fa-star"></i>
            <span>—</span>
          </div>
        </div>
        <div className="row justify-content-center text-white">
          <div className="col-md-5 mb-3 mb-md-0">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes 
              the complete source files including HTML, CSS, and JavaScript as well as 
              optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-5">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes 
              the complete source files including HTML, CSS, and JavaScript as well as 
              optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
