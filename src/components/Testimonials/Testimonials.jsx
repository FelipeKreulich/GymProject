import React from 'react'
import './Testimonials.css'
import { testimonialsData } from '../../data/testimonialsData'
import { useState } from 'react'

const Testimonials = () => {

  const [selected, setSelected] = useState(0);
  const tLenght = testimonialsData.length;

  return (
    <div className="Testimonials">
      <div className="left-t">
        <span>Depoimentos</span>
        <span className='stroke-text'>O que dizem</span>
        <span>sore nós</span>
        <span>
          {testimonialsData[selected].review}
        </span>
        <span>
          <span style={{color: "var(--orange)"}}>
            {testimonialsData[selected].name} 
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t"></div>
    </div>
  )
}

export default Testimonials