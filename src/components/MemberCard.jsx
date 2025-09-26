import React, { useState } from "react";

export default function MemberCard({ member, onClick }) {
  const [hover, setHover] = useState(false);

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
