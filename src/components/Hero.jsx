import heroImg from '../assets/pj2.png';
import { useEffect } from 'react';
import { ArrowDownCircle, Github, Linkedin, FileEarmarkPerson } from 'react-bootstrap-icons';

const Hero = () => {
  useEffect(() => {
    // Add animation class to elements after component mounts
    const timer = setTimeout(() => {
      document.querySelector('.hero-title')?.classList.add('animate__animated', 'animate__fadeInDown');
      document.querySelector('.hero-subtitle')?.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
      document.querySelector('.hero-button')?.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');
      document.querySelector('.hero-scroll')?.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center position-relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white',
        fontFamily: '"Comfortaa", cursive'
      }}
    >
      <div className="container">
        <h1 className="display-3 fw-bold hero-title mb-4" style={{ opacity: 0 }}>
          Hi, I'm Marion <span className="text-warning"></span>
        </h1>
        <p className="lead hero-subtitle mb-4" style={{ opacity: 0 }}>
          Aspiring IT Expert & Digital Creator
        </p>
        
        <div className="d-flex justify-content-center gap-3">
          <a 
            href="/about" 
            className="btn btn-outline-light btn-lg px-4 rounded-pill hero-button me-2" 
            style={{ opacity: 0 }}
          >
            <FileEarmarkPerson className="me-2" />
            View More
          </a>
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-lg px-4 rounded-pill hero-button" 
            style={{ opacity: 0 }}
          >
            <Github className="me-2" />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-lg px-4 rounded-pill hero-button ms-2" 
            style={{ opacity: 0 }}
          >
            <Linkedin className="me-2" />
            LinkedIn
          </a>
        </div>
      </div>

      <div className="position-absolute bottom-0 mb-5 hero-scroll" style={{ opacity: 0 }}>
        <ArrowDownCircle size={36} className="animate__animated animate__bounce animate__infinite" />
        <p className="small mt-2">Scroll Down</p>
      </div>
    </div>
  );
};

export default Hero;
