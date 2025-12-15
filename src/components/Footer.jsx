export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: '#2c3e50' }}>
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="fw-bold mb-3">LOCATION</h3>
            <p className="mb-1">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="fw-bold mb-3">AROUND THE WEB</h3>
            <div className="d-flex justify-content-center gap-2">
              <a href="#" className="btn btn-outline-light rounded-circle" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle" style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h3 className="fw-bold mb-3">ABOUT FREELANCER</h3>
            <p className="mb-0">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </div>
      <div className="text-center py-4" style={{ backgroundColor: '#1a252f' }}>
        <p className="mb-0">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}
