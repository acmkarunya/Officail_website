import '../styles/TeamModal.css';
import { FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function TeamModal({ member, onClose }) {
  if (!member) return null;

  const { name, role, image, bio, linkedin, github, instagram } = member;

  return (
    <div className="team-modal-overlay">
      <div className="team-modal">
        <div className="team-modal-image">
          <img src={image} alt={name} />
        </div>

        <div className="team-modal-content">
          <h2>{name}</h2>
          <h4>{role}</h4>
          <p>{bio || "This is a placeholder bio. You can update it per person."}</p>

          <div className="team-modal-socials">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            )}
          </div>
        </div>

        <div className="team-modal-close" onClick={onClose}>
          <FaTimes />
        </div>
      </div>
    </div>
  );
}
