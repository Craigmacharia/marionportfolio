import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, Laptop } from 'react-bootstrap-icons';

const Projects = () => {
  useEffect(() => {
    // Initialize carousel and add animations
    const timer = setTimeout(() => {
      document.querySelector('.projects-title')?.classList.add('animate__animated', 'animate__fadeIn');
      document.querySelectorAll('.project-card').forEach((el, i) => {
        el.classList.add('animate__animated', 'animate__fadeInUp', `animate__delay-${i+1}s`);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive personal portfolio built with React and Bootstrap",
      tags: ["React", "Bootstrap", "CSS"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/projects/portfolio",
      github: "#"
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "School project creating an admin dashboard for online stores",
      tags: ["JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/projects/dashboard",
      github: "#"
    },
    {
      id: 3,
      title: "Weather App",
      description: "Simple weather application using API integration",
      tags: ["API", "JavaScript", "CSS"],
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      link: "/projects/weather-app",
      github: "#"
    }
  ];

  return (
    <section className="py-5 bg-dark text-light" id="projects">
      <div className="container">
        <h2 className="text-center mb-5 projects-title" style={{ opacity: 0, fontFamily: '"Comfortaa", cursive' }}>
          <Laptop size={28} className="me-2 text-pink" />
          My Projects
        </h2>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-4" key={project.id}>
              <div 
                className="card h-100 bg-secondary border-0 project-card" 
                style={{ opacity: 0, transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <img 
                  src={project.image} 
                  className="card-img-top" 
                  alt={project.title} 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="badge bg-pink me-1">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between">
                  <Link 
                    to={project.link} 
                    className="btn btn-sm btn-outline-light"
                  >
                    View Details
                  </Link>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-light"
                  >
                    <Github size={16} className="me-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link 
            to="/projects" 
            className="btn btn-outline-light btn-lg px-4 rounded-pill"
            style={{ fontFamily: '"Comfortaa", cursive' }}
          >
            View All Projects <ArrowRight className="ms-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
