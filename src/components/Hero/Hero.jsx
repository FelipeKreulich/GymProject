import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'

const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true : false

  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/* THE BEST AD */}
        <div className="the-best-ad">
          <motion.div
          initial={{left: mobile ? "165px" : "238px"}}
          whileInView={{left: '8px'}}
          transition={{...transition, type: 'tween'}}
          >
          </motion.div>
          <span>O melhor club fitness da cidade</span>
        </div>
        {/* HERO HEADING */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              Aqui vamos ajudá-lo a moldar e construir seu corpo ideal e viver sua vida ao máximo.
            </span>
          </div>
        </div>
        {/* FIGURES */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Excelentes Coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>Membros no Clube</span>
          </div>
          <div>
            <span>+50</span>
            <span>Programas Fitness</span>
          </div>
        </div>
        {/* HERO BUTTONS */}
        <div className="hero-buttons">
          <button className="btn">Vamos lá</button>
          <button className="btn">Leia Mais</button>
        </div>
      </div>
      <div className="right-h">
        <button className='btn'>Entre já</button>
        <motion.div
        initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={Heart} alt="Coração" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </motion.div>
        {/* HERO IMAGES */}
        <img src={hero_image} alt="Hero" className="hero-image" />
        <motion.img 
        initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
        src={hero_image_back} alt="Hero" className="hero-image-back" />
        {/* CALORIES */}
        <motion.div 
        initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
        className="calories">
          <img src={Calories} alt="Calorias" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero