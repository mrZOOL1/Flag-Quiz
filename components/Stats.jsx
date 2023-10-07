import React from 'react'

const Stats = (props) => {
  return (
    <div className="stats" style={{display:props.display}}>

      <h1>Statistics</h1>

      <div className="statscontainer">

        <h1 className="stat">Time: {props.time}</h1>
        <h1 className="stat">{`Countries: ${props.countries}/245`}</h1>
        <h1 className="stat">Mistakes: {props.mistakes}</h1>
        <h1 className="stat">Score: {props.score}</h1>
        
      </div>

    </div>
  )
}

export default Stats