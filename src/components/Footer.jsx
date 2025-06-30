import { useEffect } from 'react';
import { Github, Linkedin, EnvelopeFill, Whatsapp } from 'react-bootstrap-icons';

const Footer = () => {
  useEffect(() => {
    // Add animation when component mounts
    const timer = setTimeout(() => {
      document.querySelector('.footer-content')?.classList.add('animate__animated', 'animate__fadeIn');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <footer className="py-4 bg-dark text-light border-top border-secondary">
      <div className="container">
        <div className="footer-content" style={{ opacity: 0 }}>
          <div className="d-flex justify-content-center gap-3 mb-3">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink hover-scale"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink hover-scale"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:your.email@example.com" 
              className="text-pink hover-scale"
              aria-label="Email"
            >
              <EnvelopeFill size={24} />
            </a>
            <a 
              href="https://wa.me/yourphonenumber" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink hover-scale"
              aria-label="WhatsApp"
            >
              <Whatsapp size={24} />
            </a>
          </div>
          
          <div className="text-center">
            <small className="d-block mb-2" style={{ fontFamily: '"Comfortaa", cursive' }}>
              © {new Date().getFullYear()} Wambui Marion | All Rights Reserved
              <p style={{ fontFamily: '"Comfortaa", cursive' }}>Designed with React & ❤️ by Craig</p>
            </small>
            <small className="text-muted" style={{ fontFamily: '"Comfortaa", cursive' }}>
              <p>Built with React & Bootstrap | Designed with Care</p>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;