import { motion } from 'framer-motion';
import { Code, Zap, Users, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Systems Programming',
      description: 'Expert in gameplay systems, AI functionality, and performance optimization'
    },
    {
      icon: <Zap size={24} />,
      title: 'Quick Learner',
      description: 'Adapt fast to new tools, concepts, and workflows with ease'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Player',
      description: 'Thrive in collaborative environments and value different perspectives'
    },
    {
      icon: <Award size={24} />,
      title: 'Problem Solver',
      description: 'Break down complex challenges and find efficient solutions'
    }
  ];

  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know who I am</p>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>Hey, I'm Stevan Likusic!</strong> Originally from Serbia, now based in Stockholm, Sweden.
            I'm a game programmer passionate about systems and gameplay development.
          </p>
          <p>
            Currently in my final year at Futuregames, I love writing clean, efficient code and diving into
            new challenges that push my skills further. Whether polishing mechanics or building from scratch,
            I'm dedicated to creating smooth and engaging experiences.
          </p>
          <p>
            Ever since I was a kid, I've been passionate about games, immersing myself in competitive multiplayer
            experiences while also cherishing single-player adventures with great stories.
          </p>
          <p>
            Outside of development, I enjoy playing games, listening to music, and spending quality time with
            friends and family. I also love traveling, discovering new activities, and unwinding with a great
            book, comic, or show!
          </p>
        </motion.div>

        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="highlight-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
