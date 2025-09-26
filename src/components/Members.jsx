import React, { useState, useEffect } from "react";
import "../styles/members.css";
import MemberCard from "./MemberCard";
import MemberModal from "./MemberModal";

const members = [
  {
    id: 1,
    name: "Dr.D Sujitha Juliet",
    role: "Head, Division of AIML",
    image: "/members/sujitha h.png",
    hoverImage: "/members/sujitha.png",
    bio: "Dr. D Sujitha Juliet, Head of the Division of AIML at KITS, provides guidance and support to the ACM Student Chapter. With her extensive expertise in artificial intelligence and machine learning, she mentors students, encourages research and innovation, and fosters a collaborative environment for the next generation of computing leaders.",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Dr.D.Narmadha",
    role: "Faculty Coordinator",
    image: "/members/narmadha h.png",
    hoverImage: "/members/narmadha.png",
    bio: "Dr. D. Narmadha, Faculty Coordinator of the KITS ACM Student Chapter, guides and supports student activities and technical projects. With her expertise in AI and computing, she mentors members, oversees workshops and competitions, and helps foster a collaborative and innovative tech environment on campus.",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
    {
    id: 3,
    name: "Rajhavel V S",
    role: "President",
    image: "/members/rajh h.png",
    hoverImage: "/members/rajh.png",
    bio: "Rajhavel V S leads the KITS ACM Student Chapter as President, inspiring members to explore computing and emerging technologies. He drives AI and software initiatives, organizes workshops and hackathons, and mentors students to build technical skills, collaboration, and a thriving tech community on campus.",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Sam Michael S",
    role: "Executive Director",
    image: "/members/michael h.png",
    hoverImage: "/members/michael.png",
    bio: "Sam Michael S, as Executive Director of the KITS ACM Student Chapter, oversees student-led initiatives and technical projects. Passionate about AI and software development, he mentors members, coordinates events, and fosters a collaborative environment to advance computing innovation on campus.",
    socials: {
      twitter: "#",
      facebook: "#",
      portfolio: "https://sammichaels.netlify.app/",
      linkedin: "www.linkedin.com/in/sam-michael-s-81386b2b3",
    },
  },
  {
    id: 5,
    name: "Allen",
    role: "Vice President - Technical Affairs",
    image: "/members/allen h.png",
    hoverImage: "/members/allen.png",
    bio: "Allen serves as the Vice President for Technical Affairs in the KITS ACM Student Chapter. He leads technical projects, supports workshops and hackathons, and mentors students in AI, coding, and emerging technologies to strengthen the chapter’s hands-on learning and innovation culture.",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    id: 6,
    name: "Riya",
    role: "Vice President - Marketing and Communications",
    image: "/members/riya h.png",
    hoverImage: "/members/riya.png",
    bio: "Riya serves as the Vice President for Marketing and Communications in the KITS ACM Student Chapter. She manages outreach, promotes events and workshops, and ensures effective communication within the chapter and with the wider campus community, helping to grow engagement and participation in tech initiatives.",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    id: 7,
    name: "Gethsia Jennifer C",
    role: "Director - Web and Tools",
    image: "/members/geth h.png",
    hoverImage: "/members/geth.png",
    bio: "Gethsia Jennifer C leads as the Director of Web and Tools in the KITS ACM Student Chapter. She manages the chapter’s digital platforms, develops web applications, and supports technical projects, enabling members to gain practical experience and maintain a strong online presence for chapter activities.",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
    {
    id: 8,
    name: "Justina Susan",
    role: "Director - Strategy and Operations",
    image: "/members/justina h.png",
    hoverImage: "/members/justina.png",
    bio: "Justina Susan serves as the Director of Strategy and Operations for the KITS ACM Student Chapter. She coordinates events, manages chapter operations, and ensures smooth execution of projects and initiatives, fostering an organized and collaborative environment for all members.",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
    {
    id: 9,
    name: "Grace Catherine",
    role: "Deputy Director - Strategy and Operations",
    image: "/members/grace h.png",
    hoverImage: "/members/grace.png",
    bio: "Grace Catherine serves as the Deputy Director of Strategy and Operations in the KITS ACM Student Chapter. She assists in organizing events, coordinating projects, and supporting smooth chapter operations, helping to create an efficient and collaborative environment for all members.",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
    {
    id: 10,
    name: "Joshua Kumar",
    role: "Treasurer",
    image: "/members/joshua h.png",
    hoverImage: "/members/joshua.png",
    bio: "Joshua Kumar serves as the Treasurer of the KITS ACM Student Chapter. He manages the chapter’s finances, oversees budgeting for events and projects, and ensures transparent and efficient use of resources to support all student activities and initiatives.",
    socials: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
    {
  id: 11,
  name: "Roshan Mathew",
  role: "Joint Treasurer",
  image: "/members/roshan h.png",
  hoverImage: "/members/roshan.png",
  bio: "Roshan Mathew assists in managing finances and budgeting for the KITS ACM Student Chapter, ensuring transparency and support for all student-led projects and events.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 12,
  name: "Brundha K",
  role: "Secretary",
  image: "/members/brundha h.png",
  hoverImage: "/members/brundha.png",
  bio: "Brundha K coordinates meetings, documentation, and communication for the KITS ACM Student Chapter, keeping the team organized and connected.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 13,
  name: "Joel Prasad",
  role: "Documentation Lead",
  image: "/members/joel h.png",
  hoverImage: "/members/joel.png",
  bio: "Joel Prasad manages documentation and reports for the KITS ACM Student Chapter, ensuring projects and events are recorded accurately for reference and growth.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 14,
  name: "Devika Pramod",
  role: "Lead Development",
  image: "/members/devika h.png",
  hoverImage: "/members/devika.png",
  bio: "Devika Pramod leads development projects in the KITS ACM Student Chapter, guiding members in coding, software tools, and technical innovation.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 15,
  name: "Sharmila R",
  role: "Lead AIML",
  image: "/members/sharmila h.png",
  hoverImage: "/members/sharmila.png",
  bio: "Sharmila R leads AI and Machine Learning initiatives for the KITS ACM Student Chapter, mentoring students in cutting-edge technologies and hands-on projects.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 16,
  name: "Rithika Kannan",
  role: "Program Lead",
  image: "/members/rithika h.png",
  hoverImage: "/members/rithika.png",
  bio: "Rithika Kannan oversees chapter programs and events for KITS ACM, coordinating activities that enhance student learning and engagement in computing.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 17,
  name: "Suraj Nair",
  role: "ACM Interface",
  image: "/members/suraj h.png",
  hoverImage: "/members/suraj.png",
  bio: "Suraj Nair acts as the primary interface between the KITS ACM Student Chapter and external collaborators, facilitating communication and partnerships.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 18,
  name: "Stuward Prince",
  role: "Club Editor",
  image: "/members/stuward h.png",
  hoverImage: "/members/stuward.png",
  bio: "Stuward Prince manages publications and content for the KITS ACM Student Chapter, ensuring members’ work and events are showcased effectively.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 19,
  name: "Aaron John",
  role: "Membership Chair",
  image: "/members/aaron h.png",
  hoverImage: "/members/aaron.png",
  bio: "Aaron John leads membership activities for the KITS ACM Student Chapter, recruiting and mentoring new members and fostering an inclusive community.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 20,
  name: "Harshada B",
  role: "Community Service Lead",
  image: "/members/harsha h.png",
  hoverImage: "/members/harsha.png",
  bio: "Harshada B coordinates community service initiatives for the KITS ACM Student Chapter, engaging members in socially impactful tech projects.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 21,
  name: "Elshen",
  role: "UI/UX Lead",
  image: "/members/elshen h.png",
  hoverImage: "/members/elshen.png",
  bio: "Elshen leads UI/UX design projects for the KITS ACM Student Chapter, ensuring digital tools and platforms are user-friendly and visually engaging.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 22,
  name: "Shemaiah",
  role: "Platform and Communication Lead",
  image: "/members/shem h.png",
  hoverImage: "/members/shem.png",
  bio: "Shemaiah manages the chapter’s platforms and communication channels, keeping KITS ACM members informed and connected.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
},
{
  id: 23,
  name: "Sam Jerish D",
  role: "Platform and Communication Lead",
  image: "/members/jerish h.png",
  hoverImage: "/members/jerish.png",
  bio: "Sam Jerish D supports platform management and communication for the KITS ACM Student Chapter, ensuring smooth information flow and engagement.",
  socials: {
    twitter: "#",
    facebook: "#",
    linkedin: "#",
  },
}

  // ... keep adding until 20 members
];

export default function Members() {
  const [selectedMember, setSelectedMember] = useState(null);

  // ✅ Preload all member images and hover images
  useEffect(() => {
    members.forEach((member) => {
      if (member.image) {
        const img = new Image();
        img.src = member.image;
      }
      if (member.hoverImage) {
        const hoverImg = new Image();
        hoverImg.src = member.hoverImage;
      }
    });
  }, []);

  return (
    <div className="members-section">
      <h2 className="members-title">Members</h2>
      <div className="members-grid">
        {members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {selectedMember && (
        <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </div>
  );
}
