import React from 'react'

const Answer = (props) => {
  return (
    <div className='space' onClick={(e) => props.clickHandler(e.currentTarget.lastChild.textContent)}>
        <p>{props.name}</p>
    </div>
  )
}

export default Answer