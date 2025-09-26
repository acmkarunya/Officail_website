import React from 'react'

export default function Filters({value,onChange,options}){
  return (
    <div className="filters" role="toolbar" aria-label="Team filters">
      {options.map(opt=>(
        <button
          key={opt}
          className="filter-btn"
          aria-pressed={value===opt}
          onClick={()=>onChange(opt)}
        >{opt}</button>
      ))}
    </div>
  )
}
