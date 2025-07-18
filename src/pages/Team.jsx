import '../styles/Team.css';
import TeamCard from '../components/TeamCard';
import TeamModal from '../components/TeamModal';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const members = [
  {
    name: 'Dr. Sujitha',
    role: 'Faculty Coordinator',
    image: '/sample.jpeg',
    bio: 'Faculty mentor guiding the ACM Karunya chapter...Faculty mentor guiding the ACM Karunya chapter...Faculty mentor guiding the ACM Karunya chapter...',
    linkedin: '#',
    github: '#',
    instagram: '#',
  },
  
  
  {
    name: 'Dr. Narmadha Naveen',
    role: 'Faculty Coordinator',
    image: '/sample.jpeg',
    bio: 'Faculty mentor guiding the ACM Karunya chapter...Faculty mentor guiding the ACM Karunya chapter...Faculty mentor guiding the ACM Karunya chapter...',
    linkedin: '#',
    github: '#',
    instagram: '#',
  },
  {
    name: 'Joshua Kumar',
    role: 'Secretary Administration',
    image: 'https://i.ibb.co/KckKZPBb/Joshuakumar.jpg',
    bio: 'This is a placeholder bio for Joshua Kumar.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Rajhavel V S',
    role: 'Joint Secretary',
    image: 'https://i.ibb.co/7dVZbSxf/Rajhavel.jpg',
    bio: 'This is a placeholder bio for Rajhavel V S.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Brundha K',
    role: 'Secretary',
    image: '/sample.jpeg',
    bio: 'This is a placeholder bio for Brundha K.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Justina Susan',
    role: 'Treasurer',
    image: '/sample.jpeg',
    bio: 'This is a placeholder bio for Justina Susan.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Devika Pramod',
    role: 'Development Lead',
    image: 'https://i.ibb.co/MJ0Gsvj/Devika-Pramod.jpg',
    bio: 'This is a placeholder bio for Devika Pramod.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Sharmila R',
    role: 'AI & ML Lead',
    image: 'https://i.ibb.co/39m7sMhm/Sharmila.jpg',
    bio: 'This is a placeholder bio for Sharmila R.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Allen Joe Subil',
    role: 'AI & ML Lead',
    image: 'https://i.ibb.co/Mx6SmhRV/Allen.jpg',
    bio: 'This is a placeholder bio for Allen Joe Subil.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Rithika K',
    role: 'Program Lead',
    image: 'https://i.ibb.co/bjF79nyQ/Rithika.jpg',
    bio: 'This is a placeholder bio for Rithika K.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Mathew Berckmans',
    role: 'Program Lead',
    image: 'https://i.ibb.co/6JR0wsvs/Mathew-Berckmans.jpg',
    bio: 'This is a placeholder bio for Mathew Berckmans.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'A. Riya',
    role: 'Social Media Lead',
    image: '/riya.jpg',
    bio: 'This is a placeholder bio for A. Riya.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Suraj Nair',
    role: 'ACM Interface Lead',
    image: 'https://i.ibb.co/sp3P5Z6k/Suraj-Nair.jpg',
    bio: 'This is a placeholder bio for Suraj Nair.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Jaswanth Raajan',
    role: 'ACM Interface Lead',
    image: 'https://i.ibb.co/JRnk9XP4/Jaswanth-Raajan.jpg',
    bio: 'This is a placeholder bio for Jaswanth Raajan.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Princelin Stuward',
    role: 'Poster and Video Editing',
    image: 'https://i.ibb.co/ZpDwPyT2/Princelin-Stuward.jpg',
    bio: 'This is a placeholder bio for Princelin Stuward.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Clement Steve Math',
    role: 'Poster and Video Editing',
    image: '/sample.jpeg',
    bio: 'This is a placeholder bio for Clement Steve Math.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Joel Prasad',
    role: 'Documentation Lead',
    image: 'https://i.ibb.co/yFd2ZtDh/Joel-Prasad.jpg',
    bio: 'This is a placeholder bio for Joel Prasad.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Elshen',
    role: 'Graphics & UI/UX Lead',
    image: 'https://i.ibb.co/SwMQRSKQ/Elshen.jpg',
    bio: 'This is a placeholder bio for Elshen.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Harshada',
    role: 'Community Service Lead',
    image: 'https://i.ibb.co/bg5sdhnv/Harshada.jpg',
    bio: 'This is a placeholder bio for Harshada.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Aaron John Langan',
    role: 'Membership Chair',
    image: 'https://i.ibb.co/39kgxHCx/Aaron-John-Langan.jpg',
    bio: 'This is a placeholder bio for Aaron John Langan.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Roshan Mathew E',
    role: 'Secretary Communicator',
    image: 'https://i.ibb.co/pv1XB369/Roshan-Mathew.jpg',
    bio: 'This is a placeholder bio for Roshan Mathew E.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Grace Catherine J',
    role: 'Vice Member',
    image: '/sample.jpeg',
    bio: 'This is a placeholder bio for Grace Catherine J.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'SAM MICHAEL S',
    role: 'Webmaster',
    image: '/sam.jpg',
    bio: 'This is a placeholder bio for Grace Catherine J.',
    linkedin: '',
    github: '',
    instagram: '',
  },
  {
    name: 'Gethsia Jennifer C',
    role: 'Webmaster',
    image: '/sample.jpeg',
    bio: 'This is a placeholder bio for Grace Catherine J.',
    linkedin: '',
    github: '',
    instagram: '',
  },
];

const layout = [2, 4, 4, 4, 4, 4, 2];

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  let start = 0;

  useEffect(() => {
    const sparkleCount = 150;
    const container = document.body;

    for (let i = 0; i < sparkleCount; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'floating-sparkle';
      sparkle.style.left = `${Math.random() * 100}vw`;
      sparkle.style.top = `${Math.random() * 120}vh`;
      sparkle.style.animationDelay = `${Math.random() * 8}s`;
      sparkle.style.animationDuration = `${4 + Math.random() * 6}s`;
      container.appendChild(sparkle);
    }

    return () => {
      document.querySelectorAll('.floating-sparkle').forEach(el => el.remove());
    };
  }, []);

  return (
    <div className="bod">
      <div className="team-page">
        <header className="team-header">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Passionate minds behind the vision
          </motion.p>
        </header>

        <div className="team-container">
          {layout.map((count, rowIndex) => {
            const rowMembers = members.slice(start, start + count);
            start += count;

            return (
              <motion.div
                className={`team-row count-${count}`}
                key={rowIndex}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: rowIndex * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {rowMembers.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <TeamCard {...member} onClick={() => setSelectedMember(member)} />
                  </motion.div>
                ))}
              </motion.div>
            );
          })}
        </div>

        <TeamModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      </div>
    </div>
  );
}

export default Team;
