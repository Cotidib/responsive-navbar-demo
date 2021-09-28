import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Navbar = () => {
  const{openSidebar, openSubmenu, closeSubmenu} = useGlobalContext();

  return <nav>
    <div className='nav-header'>
    <button className='nav-toggle' onClick={openSidebar}><FaBars/></button>
    <span className='nav-logo'>LOGO</span>
    </div> 
    <ul className='nav-links'>
      <li><button className='link-btn'>products</button></li>
      <li><button className='link-btn'>developers</button></li>
      <li><button className='link-btn'>company</button></li>
    </ul>
    <button className='action-btn'>Sign in</button>
  </nav>
}

export default Navbar