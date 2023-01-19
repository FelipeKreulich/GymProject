import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className="header" id='home'>
      <img src={Logo} alt="Logo" className='logo' />
      {(menuOpened === false && mobile === true) ? (
        <div
        style={{backgroundColor: 'var(--appColor)', padding: '0.5rem', borderRadius: '5px'}}
        onClick={() => setMenuOpened(true)}
        >
          <img src={Bars} alt="" style={{width: '1.5rem', height: '1.5rem'}}/>
        </div>
      ) : (
        <ul className='header-menu'>
        <li>
          <Link
          onClick={() => setMenuOpened(false)}
          to='home'
          spy={true}
          smooth={true}
          >Início</Link>
        </li>
        <li>
          <Link
          onClick={() => setMenuOpened(false)}
          to='programs'
          spy={true}
          smooth={true}
          >Programas</Link>
        </li>
        <li>
          <Link
          onClick={() => setMenuOpened(false)}
          to='join-us'
          spy={true}
          smooth={true}
          >Sobre Nós</Link>
        </li>
        <li>
          <Link
          onClick={() => setMenuOpened(false)}
          to='plans'
          spy={true}
          smooth={true}
          >Planos</Link>
        </li>
        <li>
          <Link
          onClick={() => setMenuOpened(false)}
          to='testimonials'
          spy={true}
          smooth={true}
          >Comentários</Link>
        </li>
      </ul>
      )}
    </div>
  )
}

export default Header