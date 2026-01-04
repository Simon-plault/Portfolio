import './Projets.css';

function Projets() {
    return (
        <div className="project-card">
    <h3>{title}</h3>
    <div className="tags">
      {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
    </div>
    {role && <p className="role"><strong>Rôle :</strong> {role}</p>}
    <p>{description}</p>
  </div>
    );
}

export default Projets;