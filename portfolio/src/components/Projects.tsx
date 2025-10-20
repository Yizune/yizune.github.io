import { motion } from 'framer-motion';
import { ExternalLink, Users, Clock, Wrench } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const featuredProject = {
    title: 'Battle Wizards',
    role: 'Gameplay Programmer',
    description: 'A coop RPG adventure with engaging gameplay mechanics and smooth multiplayer systems.',
    image: 'https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    teamSize: 1,
    duration: 'Ongoing',
    engine: 'UE5',
    featured: true
  };

  const projects = [
    {
      title: 'Project Asylum',
      role: 'Gameplay Programmer',
      description: 'A psychological horror game that traps you in a shifting, haunted asylum filled with dynamic scares and chilling puzzles.',
      image: 'https://images.pexels.com/photos/1090387/pexels-photo-1090387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      teamSize: 12,
      duration: '7 Weeks',
      engine: 'UE5'
    },
    {
      title: 'Wingman',
      role: 'Gameplay Programmer',
      description: 'An arcade-style air racing game where you navigate colorful island tracks, balancing speed and precision.',
      image: 'https://images.pexels.com/photos/163792/model-planes-propeller-aircraft-aircraft-historically-163792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      teamSize: 15,
      duration: '4 Weeks',
      engine: 'Unity'
    },
    {
      title: 'Sour Security',
      role: 'Systems Programmer',
      description: 'A puzzle sandbox turning office chaos into strategy with clever mechanics and engaging gameplay.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      teamSize: 7,
      duration: '4 Weeks',
      engine: 'UE5'
    },
    {
      title: 'Cosmic Crusaders',
      role: 'Gameplay Programmer',
      description: 'A fast-paced arcade shooter set in deep space with intense action and smooth controls.',
      image: 'https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      teamSize: 13,
      duration: '3 Weeks',
      engine: 'Unity'
    },
    {
      title: 'Brave Little One',
      role: 'Gameplay Programmer',
      description: 'A 2D pixel-art arena brawler where you fight off waves of enemies and take on a powerful boss.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      teamSize: 1,
      duration: '2 Weeks',
      engine: 'Godot'
    },
    {
      title: 'Nebula Navigator',
      role: 'Gameplay Programmer',
      description: 'A 2D co-op platformer-shooter where players dodge and blast obstacles through tight space corridors.',
      image: 'https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      teamSize: 1,
      duration: '1 Week',
      engine: 'Unity'
    }
  ];

  return (
    <section id="projects" className="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Explore my work showcased here</p>
      </motion.div>

      <motion.div
        className="featured-project"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="featured-badge">FEATURED</div>
        <div className="featured-content">
          <div className="featured-image">
            <img src={featuredProject.image} alt={featuredProject.title} />
          </div>
          <div className="featured-details">
            <h3>{featuredProject.title}</h3>
            <p className="role">{featuredProject.role}</p>
            <p className="description">{featuredProject.description}</p>
            <div className="project-meta">
              <div className="meta-item">
                <Users size={18} />
                <span>Team: {featuredProject.teamSize}</span>
              </div>
              <div className="meta-item">
                <Clock size={18} />
                <span>{featuredProject.duration}</span>
              </div>
              <div className="meta-item">
                <Wrench size={18} />
                <span>{featuredProject.engine}</span>
              </div>
            </div>
            <button className="project-button">
              <span>Coming Soon</span>
              <ExternalLink size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <div className="overlay-meta">
                  <span><Users size={14} /> {project.teamSize}</span>
                  <span><Clock size={14} /> {project.duration}</span>
                  <span><Wrench size={14} /> {project.engine}</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="role">{project.role}</p>
              <p className="description">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
