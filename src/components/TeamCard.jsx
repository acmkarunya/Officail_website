import '../styles/TeamCard.css';
import { useState } from 'react';

export default function TeamCard({ image, name, role, onClick }) {
  const [tooltipStyle, setTooltipStyle] = useState({ display: 'none' });

  const handleMouseMove = (e) => {
    setTooltipStyle({
      left: e.pageX + 12 + 'px',
      top: e.pageY + 18 + 'px',
      display: 'block',
    });
  };

  const handleMouseLeave = () => {
    setTooltipStyle({ display: 'none' });
  };

  return (
    <>
      <div
        className="team-card"
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="team-image">
          <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      <div className="floating-tooltip" style={tooltipStyle}>
        Click to view more
      </div>
    </>
  );
}
