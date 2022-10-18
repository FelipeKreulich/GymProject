import React from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* Headers */}
      <div className="programs-header">
        <span className='stroke-text'>Explore nossos</span>
        <span>Programas para</span>
        <span className='stroke-text'>Moldar você</span>
      </div>
      <div className="program-categories">
        {programsData.map((program)=>(
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs