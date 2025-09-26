import React, { useState, useEffect } from "react";

export default function MemberCard({ member, onClick }) {
  const [hover, setHover] = useState(false);

  // ✅ Preload images
  useEffect(() => {
    if (member.image) {
      const img = new Image();
      img.src = member.image;
    }
    if (member.hoverImage) {
      const imgHover = new Image();
      imgHover.src = member.hoverImage;
    }
  }, [member.image, member.hoverImage]);

  return (
    <div
      className="member-card"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={hover ? member.hoverImage : member.image}
        alt={member.name}
        className="member-photo"
      />
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-role">{member.role}</p>
      </div>
    </div>
  );
}
