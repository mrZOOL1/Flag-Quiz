import React from 'react'

const Rules = (props) => {
    const mode = props.mode;

  return (

    <div className='rules'>

        {
            mode==='Chill' &&
                <div className="cluster">
                    <p className="rule">3 Choices</p>
                    <p className="rule">60 Minutes</p>
                    <p className="rule">Unlimited Mistakes</p>
                </div>
        }

        {
            mode==='Expert' &&
                <div className="cluster">
                    <p className="rule">4 Choices</p>
                    <p className="rule">25 Minutes</p>
                    <p className="rule">30 Mistakes</p>
                </div>
        }

        {
            mode==='Psycho' &&
                <div className="cluster">
                    <p className="rule">5 Choices</p>
                    <p className="rule">10 Minutes</p>
                    <p className="rule">0 Mistakes</p>  
                </div>
        }
        
    </div>
  )
}

export default Rules