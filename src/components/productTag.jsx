import React from 'react'

export default function ProductTag({tag, selected=true}) {
    const backgroundColor = selected? 'bg-secondary *:text-white' : 'bg-primary border *:text-black'
    
  return (
    <div className={`${backgroundColor} px-2 py-1 rounded mr-2`}>
        <p className= 'text-xs font-semibold'>{tag}</p>
    </div>
  )
}
