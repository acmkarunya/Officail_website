import React from 'react'
import TeamModal from './TeamModal'
import { motion } from 'framer-motion'

export default function TeamCard({ member, index }) {
  const [open, setOpen] = React.useState(false)
  const delay = index * 0.06

  // ✅ Preload member photo
  React.useEffect(() => {
    if (member.photo) {
      const img = new Image()
      img.src = member.photo
    }
  }, [member.photo])

  return (
    <motion.article
      className='card card-tilt'
      role='listitem'
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
    >
      <div className='thumb' style={{ backgroundImage: `url(${member.photo})` }} />
      <div className='overlay'>
        <div className='meta'>
          <div className='name'>{member.name}</div>
          <div className='role'>
            {member.roleGroup}
            {member.title ? ` · ${member.title}` : ''}
          </div>
        </div>
      </div>
      <button
        className='card-btn'
        aria-label={`Open bio ${member.name}`}
        onClick={() => setOpen(true)}
        style={{ position: 'absolute', inset: 0, border: 0, background: 'transparent' }}
      />
      {open && <TeamModal member={member} onClose={() => setOpen(false)} />}
    </motion.article>
  )
}
