import './Lightbox.css';

function Lightbox({ src, alt, onClose }) {
  if (!src) return null;
  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-content" onClick={e => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Fermer">×</button>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default Lightbox;
