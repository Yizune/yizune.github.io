import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, FileText } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'stevan.likusic.24@gmail.com',
      link: 'mailto:stevan.likusic.24@gmail.com'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Stevan Likusic',
      link: 'https://www.linkedin.com/in/stevan-likusic-884946300/'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: '@Yizune',
      link: 'https://github.com/Yizune'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Stockholm, Sweden',
      link: null
    },
    {
      icon: <FileText size={24} />,
      label: 'Resume',
      value: 'Download CV',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's connect and create something amazing</p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Let's work together</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out through any of the channels below!
          </p>

          <div className="contact-cards">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="contact-card"
                  >
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-details">
                      <span className="contact-label">{item.label}</span>
                      <span className="contact-value">{item.value}</span>
                    </div>
                  </a>
                ) : (
                  <div className="contact-card">
                    <div className="contact-icon">{item.icon}</div>
                    <div className="contact-details">
                      <span className="contact-label">{item.label}</span>
                      <span className="contact-value">{item.value}</span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Ready to start a project?</h3>
            <p>
              I'm currently available for freelance work and full-time opportunities.
              Let's discuss how I can help bring your game to life!
            </p>
            <a href="mailto:stevan.likusic.24@gmail.com" className="cta-button">
              <Mail size={20} />
              <span>Send me an email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
