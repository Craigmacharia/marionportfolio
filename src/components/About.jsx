import { useEffect } from 'react';
import { 
  PersonBadge, 
  Book, 
  Laptop, 
  Lightbulb,
  ArrowRight 
} from 'react-bootstrap-icons';

const About = () => {
  useEffect(() => {
    // Add animation class to elements after component mounts
    const timer = setTimeout(() => {
      document.querySelector('.about-title')?.classList.add('animate__animated', 'animate__fadeIn');
      document.querySelector('.about-text')?.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-1s');
      document.querySelector('.about-button')?.classList.add('animate__animated', 'animate__fadeInUp', 'animate__delay-1s');
      document.querySelectorAll('.about-feature').forEach((el, i) => {
        el.classList.add('animate__animated', 'animate__fadeIn', `animate__delay-${i+1}s`);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-5 bg-dark text-light" id="about">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="mb-4 about-title" style={{ opacity: 0, fontFamily: '"Comfortaa", cursive' }}>
            <PersonBadge size={28} className="me-2 text-pink" />
            About Me
          </h2>
          <p className="lead about-text mx-auto" style={{ 
            maxWidth: '800px', 
            opacity: 0,
            fontFamily: '"Comfortaa", cursive' 
          }}>
            I'm currently pursuing a Certificate in Information Technology with a passion for 
            technology, continuous learning, and hands-on experience in solving real-world problems.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4 about-feature" style={{ opacity: 0 }}>
            <div className="card h-100 bg-white border-0">
              <div className="card-body p-4 text-center">
                <Book size={48} className="mb-3 text-pink" />
                <h4 className="mb-3" style={{ fontFamily: '"Comfortaa", cursive' }}>Education</h4>
                <p style={{ fontFamily: '"Comfortaa", cursive' }}>
                  Currently enrolled in IT certification program with focus on 
                  software development and system administration.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 about-feature" style={{ opacity: 0 }}>
            <div className="card h-100 bg-grey border-0">
              <div className="card-body p-4 text-center">
                <Laptop size={48} className="mb-3 text-pink" />
                <h4 className="mb-3" style={{ fontFamily: '"Comfortaa", cursive' }}>Skills</h4>
                <p style={{ fontFamily: '"Comfortaa", cursive' }}>
                  Developing expertise in programming, networking, and IT fundamentals.
                  Quick learner with strong problem-solving abilities.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 about-feature" style={{ opacity: 0 }}>
            <div className="card h-100 bg-white border-0">
              <div className="card-body p-4 text-center">
                <Lightbulb size={48} className="mb-3 text-pink" />
                <h4 className="mb-3" style={{ fontFamily: '"Comfortaa", cursive' }}>Passion</h4>
                <p style={{ fontFamily: '"Comfortaa", cursive' }}>
                  Enthusiastic about technology's potential to transform lives and 
                  create innovative solutions for everyday challenges.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a 
            href="/about" 
            className="btn btn-outline-light btn-lg px-4 rounded-pill about-button" 
            style={{ 
              opacity: 0, 
              fontFamily: '"Comfortaa", cursive' 
            }}
          >
            View Full Profile <ArrowRight className="ms-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;  