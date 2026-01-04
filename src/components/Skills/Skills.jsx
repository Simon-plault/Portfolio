import './Skills.css';

const Skills = () => {
  const skillGroups = [
    { name: "Systèmes", items: ["C++ / C", "Python", "SQL", "Qt Creator"] },
    { name: "Conception", items: ["SolidWorks", "Figma", "Git", "Agile"] }
  ];

  return (
    <section className="skills-section">
      <h2>Compétences Techniques</h2>
      {skillGroups.map(group => (
        <div key={group.name}>
          <h4>{group.name}</h4>
          <div className="skills-grid">
            {group.items.map(item => <span key={item} className="skill-badge">{item}</span>)}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;