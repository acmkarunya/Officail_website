import React, { useEffect } from "react";
import "../styles/modal.css";

const MemberModal = ({ member, onClose }) => {
  // ✅ Preload member image
  useEffect(() => {
    if (member.image) {
      const img = new Image();
      img.src = member.image;
    }
  }, [member.image]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <div className="modal-inner">
          <div className="modal-left">
            <h4 className="modal-role">{member.role}</h4>
            <h2 className="modal-name">{member.name}</h2>
            <p className="modal-bio">{member.bio}</p>
            <div className="modal-socials">
              <a href={member.socials.portfolio} target="_blank" rel="noreferrer">
                Portfolio ↗
              </a>
              <a href={member.socials.linkedin} target="_blank" rel="noreferrer">
                Linkedin ↗
              </a>
            </div>
          </div>
          <div className="modal-right">
            <img src={member.image} alt={member.name} className="modal-photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberModal;
