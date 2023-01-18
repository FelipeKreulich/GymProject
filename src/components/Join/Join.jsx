import React from 'react'
import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8p71n6p', 'template_ycj4stp', form.current, 'd7ngVld5paCGkVcG4')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text)
    })
  }

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>PRONTO PARA</span>
          <span> DECOLAR</span>
        </div>
        <div>
          <span>SEU CORPO</span>
          <span className='stroke-text'> COM NÓS?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder='Digite seu Email' />
          <button className='btn btn-j'>Entrar Agora</button>
        </form>
      </div>
    </div>
  )
}

export default Join