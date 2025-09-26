import React from 'react'
import TeamCard from './TeamCard'
import { motion } from 'framer-motion'

export default function TeamGrid({members}){
  return (
    <motion.div className='grid' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} layout>
      {members.map((m,i)=> <TeamCard key={m.id} member={m} index={i} />)}
    </motion.div>
  )
}
