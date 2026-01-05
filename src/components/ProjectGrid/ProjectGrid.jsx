import { useState, useEffect } from 'react';
import './ProjectGrid.css';
import project1 from '../../assets/avatar.jpg';
import project2 from '../../assets/avatar.jpg';
import project3 from '../../assets/avatar.jpg';
import Lightbox from '../Lightbox/Lightbox';

const ProjectGrid = () => {
  const [lightboxImages, setLightboxImages] = useState(null);
  const [activePreviewImages, setActivePreviewImages] = useState([]);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [bubblePos, setBubblePos] = useState({ x: 0, y: 0 });
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    let interval;
    if (showBubble && activePreviewImages.length > 1) {
      interval = setInterval(() => {
        setPreviewIndex((prev) => (prev + 1) % activePreviewImages.length);
      }, 800);
    }
    return () => clearInterval(interval);
  }, [showBubble, activePreviewImages]);

  const projects = [
    { 
      title: "Tower Defense (C++)", 
      tags: ["C++", "SQL", "Git"], 
      desc: "Product Owner. Focus sur l'optimisation des performances et la gestion agile.", 
      images: [project1, project2, project3] 
    },
    { 
      title: "Domotique & IoT", 
      tags: ["Microcontrôleurs", "Électronique"], 
      desc: "Programmation de capteurs physiques et automatisation.", 
      images: [project2, project3, project1] 
    },
    { 
      title: "Conception 3D", 
      tags: ["SolidWorks"], 
      desc: "Création de pièces techniques et assemblages industriels.", 
      images: [project3, project1, project2] 
    }
  ];

  return (
    <section className="projects-container">
      <h2>Projets Techniques</h2>
      <div className="grid">
        {projects.map((p, i) => (
          <div
            key={i}
            className="card"
            // onClick={() => setLightboxImages(p.images)}
            // onMouseEnter={(e) => {
            //   setActivePreviewImages(p.images);
            //   setPreviewIndex(0);
            //   setShowBubble(true);
            //   setBubblePos({ x: e.clientX, y: e.clientY });
            // }}
            // onMouseMove={(e) => setBubblePos({ x: e.clientX, y: e.clientY })}
            // onMouseLeave={() => {
            //   setShowBubble(false);
            //   setActivePreviewImages([]);
            // }}
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
      {/* <div
        className={`preview-bubble ${showBubble ? 'visible' : ''}`}
        style={{ left: bubblePos.x, top: bubblePos.y }}
        aria-hidden={!showBubble}
      >
        {activePreviewImages.length > 0 && (
          <img src={activePreviewImages[previewIndex]} alt="Aperçu" />
        )}
      </div>

      <Lightbox images={lightboxImages} alt="Aperçu du projet" onClose={() => setLightboxImages(null)} /> */}
    </section>
  );
};

export default ProjectGrid;
