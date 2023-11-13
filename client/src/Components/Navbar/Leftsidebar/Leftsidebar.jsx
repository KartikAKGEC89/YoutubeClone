import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import {NavLink} from 'react-router-dom'
import { MdOutlineExplore, MdOutlineSubscriptions, MdVideoLibrary } from 'react-icons/md'
import './leftsidebar.css'

const Leftsidebar = () => {
    return (
      <>
    <div className='container_Leftside'>
      <NavLink  to= {'/'} className='icon_sidebar_div'>
              <AiOutlineHome size={22} className='icon_sidebar' />
              <div className='text_sidebar'>Home</div>
      </NavLink>
          
      <NavLink to={'/Explorer'} className='icon_sidebar_div'>
              <MdOutlineExplore size={22} className='icon_sidebar' />
              <div className='text_sidebar'>Explorer</div>
      </NavLink>
          
      <NavLink to={ '/Subscribe' } className='icon_sidebar_div'>
              <MdOutlineSubscriptions size={22} className='icon_sidebar' />
              <div className='text_sidebar' style={{fontSize:"12px"}}>Subscription</div>
      </NavLink>
          
      <NavLink to={'/Library'} className='icon_sidebar_div'>
              <MdVideoLibrary size={22} className='icon_sidebar' />
              <div className='text_sidebar'>Library</div>
      </NavLink>
            </div>
            </>
  )
}

export default Leftsidebar
