export default function Contact() {
  return (
    <section className="py-5" style={{ minHeight: 'calc(100vh - 76px)', backgroundColor: '#fff' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-1 text-uppercase mb-3" style={{ color: '#2c3e50' }}>conatct section</h2>
          <div className="d-flex align-items-center justify-content-center gap-3 mb-4" style={{ fontSize: '1.5rem', color: '#2c3e50' }}>
            <span>—</span>
            <i className="fas fa-star"></i>
            <span>—</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form>
              <div className="mb-4 position-relative">
                <input 
                  type="text" 
                  className="form-control border-0 border-bottom rounded-0 py-3 px-0" 
                  placeholder="userName" 
                  style={{ fontSize: '1rem', color: '#6c757d' }}
                />
              </div>
              <div className="mb-4 position-relative">
                <input 
                  type="number" 
                  className="form-control border-0 border-bottom rounded-0 py-3 px-0" 
                  placeholder="userAge" 
                  style={{ fontSize: '1rem', color: '#6c757d' }}
                />
              </div>
              <div className="mb-4 position-relative">
                <input 
                  type="email" 
                  className="form-control border-0 border-bottom rounded-0 py-3 px-0" 
                  placeholder="userEmail" 
                  style={{ fontSize: '1rem', color: '#6c757d' }}
                />
              </div>
              <div className="mb-4 position-relative">
                <input 
                  type="password" 
                  className="form-control border-0 border-bottom rounded-0 py-3 px-0" 
                  placeholder="userPassword" 
                  style={{ fontSize: '1rem', color: '#6c757d' }}
                />
              </div>
              <button 
                type="submit" 
                className="btn text-white fw-semibold px-4 py-2" 
                style={{ backgroundColor: '#1abc9c', border: 'none' }}
              >
                send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
