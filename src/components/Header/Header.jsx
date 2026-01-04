import './Header.css';

import './Header.css';
import avatar from '../../assets/avatar.svg';

const Header = () => {
  return (
    <header className="hero-section">
      <div className="hero-inner">
        <img src={avatar} alt="Photo de Simon" className="hero-photo" />
        <div className="hero-text">
          <h1>Simon PLAULT</h1>
          <p className="subtitle">Étudiant en 2e année de BUT Informatique à l'IUT de La Rochelle</p>
          <p className="bio">Développeur spécialisé dans les systèmes logiciels performants, passionné par la robotique et la conception industrielle 3D.</p>
          <div className="contact-links">
            <a href="mailto:ton-email@exemple.com" aria-label="Envoyer un email">
              <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Email
            </a>
            <a href="https://www.linkedin.com/in/simon-plault/" target="_blank" rel="noreferrer" aria-label="Profil LinkedIn">
              <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;