import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context'

const Sidebar = () => {
  const {isSideBarOpen,closeSideBar} = useGlobalContext();

  return <aside className={`${isSideBarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}`}>
    <div className='sidebar'>
      <button className='close-btn' onClick={closeSideBar}><FaTimes/></button>
      <div className='sidebar-links'>
        {sublinks.map((item,index) => {
          const {links,page} = item;
          return <article key={index}>
            <h3>{page}</h3>
            <div className='sidebar-sublinks'>
              {links.map((link,index) => {
                const {url,icon,label} = link;
                return <a key={index} href={url}>{icon} {label}</a>
              })}
            </div>
          </article>
        })}
      </div>
    </div>
  </aside>
}

export default Sidebar