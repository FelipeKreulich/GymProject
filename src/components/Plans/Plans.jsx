import React from 'react'
import './Plans.css'
import whiteTick from '../../assets/whiteTick.png'
import {plansData} from '../../data/plansData'

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header" style={{gap: '2rem'}}>
        <span className='stroke-text'>PRONTO PARA</span>
        <span>INICIAR SUA JORNADA</span>
        <span className='stroke-text'>AGORA CONOSCO</span>
      </div>

      {/* Plans Card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>R$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>Veja mais benefícios!</span>
            </div>
            <button className="btn">Inscreva-se</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans