import { useState } from 'react';
import { Github, EyeFill, Laptop, FilterCircle } from 'react-bootstrap-icons';
import { BiSearch } from 'react-icons/bi';


// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A responsive personal portfolio built with React and Bootstrap showcasing my work and skills.",
    technologies: ["React", "Bootstrap", "CSS3"],
    year: "2024",
    category: "web",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubLink: "#",
    liveDemo: "#"
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "School project creating an admin dashboard for online stores with analytics and inventory management.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    year: "2023",
    category: "web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubLink: "#",
    liveDemo: "#"
  },
  {
    id: 3,
    title: "Weather Application",
    description: "Simple weather application using API integration to display real-time forecasts and weather data.",
    technologies: ["API", "JavaScript", "CSS3"],
    year: "2023",
    category: "mobile",
    image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    githubLink: "#",
    liveDemo: "#"
  }
];

const ProjectsPage = () => {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projectsData.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="container py-5" style={{ fontFamily: '"Comfortaa", cursive', color: '' }}>
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold mb-3">
          <Laptop size={36} className="me-3 text-pink" />
          My Projects
        </h1>
        <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
          Here's a collection of projects I've worked on, showcasing my skills and growth as a developer.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <div className="input-group">
            <span className="input-group-text bg-dark border-dark">
              <FilterCircle className="text-pink" />
            </span>
            <select 
              className="form-select bg-dark border-dark text-light"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="web">Web Development</option>
              <option value="mobile">Mobile Apps</option>
              <option value="design">UI/UX Design</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
        <div className="input-group">
          <span className="input-group-text bg-dark border-dark">
            <BiSearch className="text-pink" />
          </span>
          <input
            type="text"
            className="form-control bg-dark border-dark text-light"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      </div>

      {/* Projects Grid */}
      <div className="row g-4">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 hover-scale" style={{ backgroundColor: 'rgba(265, 186, 193, 0.35)' }}>
                <img 
                  src={project.image} 
                  className="card-img-top" 
                  alt={project.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title" style={{ color: 'black' }}>{project.title}</h5>
                    <span className="badge bg-pink">{project.year}</span>
                  </div>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-black me-1 mb-1">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-outline-light"
                  >
                    <Github size={16} className="me-1" /> Code
                  </a>
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-dark btn-outline-light"
                  >
                    <EyeFill size={16} className="me-1" /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4>No projects found matching your criteria</h4>
            <button 
              className="btn btn-pink mt-3"
              onClick={() => {
                setFilter("all");
                setSearchTerm("");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
  