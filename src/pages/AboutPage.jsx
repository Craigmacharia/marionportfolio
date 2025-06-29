import { CodeSlash, Laptop, Lightbulb, PersonWorkspace } from 'react-bootstrap-icons';
import profileImage from '../assets/gathoni.jpg'; // Add your profile image
import project1 from '../assets/gathoni0.png'; // Add your project images
import project2 from '../assets/boardify.jpg';
import project3 from '../assets/pj.png';

const AboutPage = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Designed and developed a responsive personal portfolio using React and Bootstrap",
      technologies: ["React", "Bootstrap", "CSS3"],
      year: "2024",
      image: project1
    },
    {
      title: "E-commerce Dashboard",
      description: "Built an admin dashboard for online stores as part of an annual school project",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      year: "2023",
      image: project2
    },
    {
      title: "Weather Application",
      description: "Created a weather app with API integration to display real-time forecasts",
      technologies: ["API Integration", "JavaScript", "CSS3"],
      year: "2023",
      image: project3
    }
  ];

  const skills = [
    { name: "Frontend Development", level: 80 },
    { name: "UI/UX Design", level: 70 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 65 },
    { name: "Bootstrap", level: 85 }
  ];

  return (
    <div className="container py-5" style={{ fontFamily: '"Comfortaa", cursive', color: '' }}>
      <div className="row">
        {/* Introduction Section with Profile Image */}
        <div className="col-lg-6 mb-5">
          <div className="d-flex align-items-center mb-4">
            <img 
              src={profileImage} 
              alt="Profile" 
              className="rounded-circle me-4" 
              style={{ width: '120px', height: '120px', objectFit: 'cover' }}
            />
            <div>
              <h1 className="display-5 fw-bold mb-2">
                <PersonWorkspace size={36} className="me-3 text-pink" />
                About Me
              </h1>
              <p className="mb-0" style={{ color: '#ff6b9d' }}>Aspiring IT Professional</p>
            </div>
          </div>
          <p className="lead mb-4">
            Hello! I'm Wambui Marion, currently pursuing my Certificate in Information Technology. 
            I'm passionate about creating digital solutions that make an impact.
          </p>
          <div className="d-flex align-items-center mb-4">
            <div className="me-4">
              <Lightbulb size={48} className="text-pink" />
            </div>
            <div>
              <h4>My Approach</h4>
              <p>
                I believe in clean, efficient code and user-centered design. 
                Every project is an opportunity to learn and grow.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="col-lg-6 mb-5">
          <h2 className="mb-4">
            <CodeSlash size={28} className="me-2 text-pink" />
            My Skills
          </h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-3">
              <div className="d-flex justify-content-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="progress" style={{ height: "8px", backgroundColor: '#333' }}>
                <div 
                  className="progress-bar bg-pink" 
                  role="progressbar" 
                  style={{ width: `${skill.level}%` }}
                  aria-valuenow={skill.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section with Images */}
      <div className="mt-5">
        <h2 className="mb-4">
          <Laptop size={28} className="me-2 text-pink" />
          Featured Projects
        </h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 hover-scale" style={{ backgroundColor: 'rgba(250, 182, 193, 0.15)' }}>
                <img 
                  src={project.image} 
                  className="card-img-top" 
                  alt={project.title}
                  style={{ height: '180px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title" style={{ color: 'black' }}>{project.title}</h5>
                    <span className="badge bg-pink">{project.year}</span>
                  </div>
                  <p className="card-text">{project.description}</p>
                  <div className="mt-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-black me-1">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="mt-5">
        <h2 className="mb-4">Education & Certification</h2>
        <div className="card border-0" style={{ backgroundColor: 'rgba(250, 182, 193, 0.15)' }}>
          <div className="card-body">
            <h5 style={{ color: 'black' }}>Certificate in Information Technology</h5>
            <p className="text-muted">Current</p>
            <p>
              Comprehensive program covering web development, networking fundamentals, 
              and system administration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;