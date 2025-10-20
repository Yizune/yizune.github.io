import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'C#', level: 90 },
        { name: 'C++', level: 85 },
        { name: 'Blueprint', level: 88 },
        { name: 'GDScript', level: 80 },
        { name: 'JavaScript', level: 82 },
        { name: 'TypeScript', level: 78 }
      ]
    },
    {
      title: 'Game Engines',
      skills: [
        { name: 'Unreal Engine', level: 90 },
        { name: 'Unity', level: 88 },
        { name: 'Godot', level: 80 }
      ]
    },
    {
      title: 'Technical Skills',
      skills: [
        { name: 'AI Programming', level: 85 },
        { name: 'Gameplay Systems', level: 92 },
        { name: 'Performance Optimization', level: 80 },
        { name: 'Gameplay Ability System (GAS)', level: 82 },
        { name: 'Code Review & Debugging', level: 88 },
        { name: 'Physics (2D & 3D)', level: 84 }
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Perforce', level: 78 },
        { name: 'PlasticSCM', level: 75 },
        { name: 'Visual Studio', level: 90 },
        { name: 'Rider', level: 85 },
        { name: 'React', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">My technical expertise and proficiency</p>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="skill-category"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            viewport={{ once: true }}
          >
            <h3>{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="skill-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
