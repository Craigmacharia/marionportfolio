import { useEffect } from 'react';
import { 
  EnvelopeFill,
  TelephoneFill,
  Whatsapp,
  Linkedin,
  Github,
  ChatRightTextFill,
  ArrowRight 
} from 'react-bootstrap-icons';

const Contact = () => {
  useEffect(() => {
    // Add animations when component mounts
    const timer = setTimeout(() => {
      document.querySelector('.contact-title')?.classList.add('animate__animated', 'animate__fadeIn');
      document.querySelector('.contact-subtitle')?.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
      document.querySelectorAll('.contact-method').forEach((el, i) => {
        el.classList.add('animate__animated', 'animate__fadeInUp', `animate__delay-${i+1}s`);
      });
      document.querySelector('.contact-button')?.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-5 bg-dark text-light" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="contact-title mb-4" style={{ opacity: 0, fontFamily: '"Comfortaa", cursive' }}>
            <ChatRightTextFill size={28} className="me-2 text-pink" />
            Get In Touch
          </h2>
          <p className="lead contact-subtitle mx-auto" style={{ maxWidth: '600px', opacity: 0 }}>
            I'm open to opportunities, collaborations, or just a friendly chat about tech!
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4 contact-method" style={{ opacity: 0 }}>
            <div className="card h-100 bg-secondary border-0">
              <div className="card-body p-4 text-center">
                <EnvelopeFill size={48} className="mb-3 text-pink" />
                <h4>Email</h4>
                <a href="mailto:your.email@example.com" className="text-light d-block mt-2">
                  your.email@example.com
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 contact-method" style={{ opacity: 0 }}>
            <div className="card h-100 bg-secondary border-0">
              <div className="card-body p-4 text-center">
                <Whatsapp size={48} className="mb-3 text-pink" />
                <h4>WhatsApp</h4>
                <a href="https://wa.me/yourphonenumber" className="text-light d-block mt-2">
                  +254 7XX XXX XXX
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 contact-method" style={{ opacity: 0 }}>
            <div className="card h-100 bg-secondary border-0">
              <div className="card-body p-4 text-center">
                <TelephoneFill size={48} className="mb-3 text-pink" />
                <h4>Call/SMS</h4>
                <a href="tel:+2547XXXXXXXX" className="text-light d-block mt-2">
                  +254 7XX XXX XXX
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <h4 className="mb-3">Or connect with me on social media</h4>
          <div className="d-flex justify-content-center gap-3 mb-4">
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-light rounded-circle p-3"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-light rounded-circle p-3"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://wa.me/yourphonenumber" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-light rounded-circle p-3"
              aria-label="WhatsApp"
            >
              <Whatsapp size={24} />
            </a>
          </div>

          <a 
            href="/contact" 
            className="btn btn-outline-light btn-lg px-4 rounded-pill contact-button" 
            style={{ opacity: 0, fontFamily: '"Comfortaa", cursive' }}
          >
            Contact Form <ArrowRight className="ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;