import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title">
            <span className="wave">👋</span> Hi, I'm{' '}
            <span className="gradient-text">Stevan Likusic</span>
          </h1>
          <p className="hero-subtitle">Game Programmer & Developer</p>
          <p className="hero-description">
            Passionate about systems and gameplay development. I create clean, efficient code
            and engaging game experiences that bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="hero-social"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="https://github.com/Yizune" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/stevan-likusic-884946300/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:stevan.likusic.24@gmail.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      <div className="hero-decoration">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
