import React from 'react'
import { createPortal } from 'react-dom'
import useLockBodyScroll from '../hooks/useLockBodyScroll'
import { motion } from 'framer-motion'

export default function TeamModal({member,onClose}){
  useLockBodyScroll(true)
  React.useEffect(()=>{
    const onKey=(e)=> e.key==='Escape' && onClose()
    window.addEventListener('keydown',onKey)
    return ()=>window.removeEventListener('keydown',onKey)
  },[onClose])

  const content = (
    <div className='modal-backdrop' onClick={onClose} role='dialog' aria-modal='true'>
      <motion.div className='modal' onClick={(e)=>e.stopPropagation()} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} transition={{duration:0.28}}>
        <button className='close-x' aria-label='Close' onClick={onClose}>✕</button>
        <div className='modal-header'>
          <img className='modal-media' src={member.photo} alt={member.name} />
          <div className='modal-body'>
            <div className='modal-name'>{member.name}</div>
            <div className='modal-role'>{member.roleGroup}{member.title?` · ${member.title}`:''}</div>
            <p className='modal-bio'>{member.bio}</p>
          </div>
        </div>
        <div className='modal-footer'>
          {member.links?.map(l=>(<a key={l.url} className='icon-btn' href={l.url} target='_blank' rel='noreferrer'>↗ {l.label}</a>))}
        </div>
      </motion.div>
    </div>
  )
  return createPortal(content, document.body)
}
