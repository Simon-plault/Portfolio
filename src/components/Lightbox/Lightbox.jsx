import { useState, useEffect } from 'react';
import './Lightbox.css';

function Lightbox({ images, src, alt, onClose }) {
  const imageList = images || (src ? [src] : []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images, src]);

  if (!imageList.length) return null;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Fermer">×</button>
        
        {imageList.length > 1 && (
          <button className="lightbox-nav prev" onClick={handlePrev}>‹</button>
        )}
        
        <img src={imageList[currentIndex]} alt={alt} />
        
        {imageList.length > 1 && (
          <button className="lightbox-nav next" onClick={handleNext}>›</button>
        )}

        {imageList.length > 1 && (
          <div className="lightbox-dots">
            {imageList.map((_, idx) => (
              <span 
                key={idx} 
                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Lightbox;
