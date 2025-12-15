import { useState } from 'react';
import hutImg from '../assets/images/hut.jpeg';
import cakeImg from '../assets/images/cake.jpeg';
import circusImg from '../assets/images/circus.jpeg';

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);

  const portfolioItems = [
    { id: 1, title: 'Log Cabin', image: hutImg, bgColor: '#ba4567' },
    { id: 2, title: 'Tasty Cake', image: cakeImg, bgColor: '#1abc9c' },
    { id: 3, title: 'Circus Tent', image: circusImg, bgColor: '#1a1a1a' },
    { id: 4, title: 'Log Cabin', image: hutImg, bgColor: '#ba4567' },
    { id: 5, title: 'Tasty Cake', image: cakeImg, bgColor: '#1abc9c' },
    { id: 6, title: 'Circus Tent', image: circusImg, bgColor: '#1a1a1a' }
  ];

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <section className="py-5" style={{ minHeight: 'calc(100vh - 76px)', backgroundColor: '#fff' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-1 text-uppercase mb-3" style={{ color: '#2c3e50' }}>PORTFOLIO COMPONENT</h2>
            <div className="d-flex align-items-center justify-content-center gap-3 mb-4" style={{ fontSize: '1.5rem', color: '#2c3e50' }}>
              <span>—</span>
              <i className="fas fa-star"></i>
              <span>—</span>
            </div>
          </div>
          <div className="row g-4">
            {portfolioItems.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div className="rounded-3 overflow-hidden position-relative" 
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleItemClick(item)}
                >
                  <img src={item.image} alt={item.title} className="w-100" style={{ display: 'block' }} />
                  {/* Hover overlay */}
                  <div 
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                    style={{
                      backgroundColor: 'rgba(26, 188, 156, 0)',
                      transition: 'background-color 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(26, 188, 156, 0.9)';
                      e.currentTarget.querySelector('i').style.opacity = '1';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(26, 188, 156, 0)';
                      e.currentTarget.querySelector('i').style.opacity = '0';
                    }}
                  >
                    <i className="fas fa-plus" style={{ fontSize: '4rem', color: 'white', opacity: 0, transition: 'opacity 0.3s ease' }}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" 
          style={{ 
            backgroundColor: 'rgba(10, 30, 80, 0.85)', 
            zIndex: 9999,
            padding: '20px'
          }}
          onClick={closeModal}
        >
          <div className="position-relative" style={{ maxWidth: '600px', width: '100%' }}>
            <div 
              className="rounded-3 overflow-hidden position-relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedItem.image} alt={selectedItem.title} className="w-100" style={{ display: 'block' }} />
              {/* zorar el x */}
              <button
                className="position-absolute btn btn-link text-white p-0"
                style={{ 
                  top: '10px', 
                  right: '10px', 
                  fontSize: '2rem',
                  textDecoration: 'none',
                  zIndex: 10,
                  width: '40px',
                  height: '40px',
                  lineHeight: '1'
                }}
                onClick={closeModal}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
