import { EnvelopeFill, TelephoneFill, Whatsapp, Twitter, Linkedin, Github, ChatRightTextFill, GeoAltFill } from 'react-bootstrap-icons';

const ContactPage = () => {
  return (
    <div className="container py-5" style={{ fontFamily: '"Comfortaa", cursive', color: '', }}>
      <div className="row">
        {/* Contact Information Section */}
        <div className="col-lg-6 mb-5">
          <h1 className="display-5 fw-bold mb-4">
            <ChatRightTextFill size={28} className="me-1 text-pink" />
            Get In Touch
          </h1>
          <p className="lead mb-4">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="contact-method mb-4">
            <div className="d-flex align-items-center mb-3">
              <EnvelopeFill size={24} className="me-3 text-pink" />
              <div>
                <h5>Email</h5>
                <a href="mailto:eliza@example.com" className="text-decoration-none" style={{ color: 'hotpink' }}>
                  eliza@example.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-method mb-4">
            <div className="d-flex align-items-center mb-3">
              <Whatsapp size={24} className="me-3 text-pink" />
              <div>
                <h5>WhatsApp</h5>
                <a href="https://wa.me/2547XXXXXXXX" className="text-decoration-none" style={{ color: 'hotpink' }}>
                  +254 7XX XXX XXX
                </a>
              </div>
            </div>
          </div>

          <div className="contact-method mb-4">
            <div className="d-flex align-items-center mb-3">
              <GeoAltFill size={24} className="me-3 text-pink" />
              <div>
                <h5>Location</h5>
                <a href="" className="text-decoration-none" style={{ color: 'black' }}>Nairobi</a>
              </div>
            </div>
          </div>

          <div className="social-links mt-4">
            <h5 className="mb-3">Connect With Me</h5>
            <div className="d-flex gap-3">
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Linkedin size={24} className="text-pink" />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Github size={24} className="text-pink" />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="social-icon">
                <Twitter size={24} className="text-pink" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-lg-6 mb-5">
          <div className="card border-0 p-4" style={{ backgroundColor: 'rgba(265, 186, 193, 0.35)' }}>
            <h3 className="mb-4" style={{ color: 'black' }}>Send Me a Message</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control bg-dark border-dark text-light" id="name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" className="form-control bg-dark border-dark text-light" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input type="text" className="form-control bg-dark border-dark text-light" id="subject" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control bg-dark border-dark text-light" id="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      </div>
  )
}

export default ContactPage;