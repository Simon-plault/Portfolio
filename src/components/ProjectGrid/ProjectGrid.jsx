import { useState } from 'react';
import './ProjectGrid.css';
import project1 from '../../assets/avatar.jpg';
import project2 from '../../assets/avatar.jpg';
import project3 from '../../assets/avatar.jpg';
import Lightbox from '../Lightbox/Lightbox';

const ProjectGrid = () => {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [hoveredSrc, setHoveredSrc] = useState(null);
  const [bubblePos, setBubblePos] = useState({ x: 0, y: 0 });
  const [showBubble, setShowBubble] = useState(false);

  const projects = [
    { title: "Tower Defense (C++)", tags: ["C++", "SQL", "Git"], desc: "Product Owner. Focus sur l'optimisation des performances et la gestion agile.", img: project1 },
    { title: "Domotique & IoT", tags: ["Microcontrôleurs", "Électronique"], desc: "Programmation de capteurs physiques et automatisation.", img: project2 },
    { title: "Conception 3D", tags: ["SolidWorks"], desc: "Création de pièces techniques et assemblages industriels.", img: project3 }
  ];

  return (
    <section className="projects-container">
      <h2>Projets Techniques</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setLightboxSrc(p.img)}
            onMouseEnter={(e) => {
              setHoveredSrc(p.img);
              setShowBubble(true);
              setBubblePos({ x: e.clientX, y: e.clientY });
            }}
            onMouseMove={(e) => setBubblePos({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setShowBubble(false)}
          >
            <div className="card-body">
              <h3>{p.title}</h3>
              <div className="tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <p>{p.desc}</p>
            </div>
            
          </div>
        ))}
      </div>

      {/* Floating preview bubble that follows the cursor */}
      <div
        className={`preview-bubble ${showBubble ? 'visible' : ''}`}
        style={{ left: bubblePos.x, top: bubblePos.y }}
        aria-hidden={!showBubble}
      >
        {hoveredSrc && <img src={hoveredSrc} alt="Aperçu" />}
      </div>

      <Lightbox src={lightboxSrc} alt="Aperçu du projet" onClose={() => setLightboxSrc(null)} />
    </section>
  );
};

export default ProjectGrid;
