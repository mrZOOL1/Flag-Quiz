import React from 'react'

const Row = (props) => {
  return (
    <div className='row'>

      <div className='column'>{props.data.mode}</div>
      <div className='column'>{props.data.time}</div>
      <div className='column'>{props.data.score}</div>
      <div className='column'>{props.data.correct}</div>
      <div className='column'>{props.data.mistakes}</div>

    </div>
  )
}

export default Row