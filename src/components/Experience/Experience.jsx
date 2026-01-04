import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Infotechnity',
      date: 'Stage Informatique - 2020',
      desc: "Assemblage de composants et configuration de systèmes d'exploitation (OS) en environnement pro.",
    },
  ];

  return (
    <section className="exp-section">
      <h2>Expérience</h2>
      <div className="grid">
        {experiences.map((e, i) => (
          <div key={i} className="card">
            <h3>{e.company}</h3>
            <p className="date">{e.date}</p>
            <p>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
