import React from 'react'
import './Navbar.css'
import Logo from './logo.ico'
import SearchBar from './Searchbar/SearchBar'
import { RiVideoAddLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import {BiUserCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'
const Navbar = () => {
  // const Currentuser = null;
  const Currentuser = {
    result: {
      name: "kartik",
      email: "s11kartik2111087@gmail.com"
    }
  }

  return (
    <div className='Container_Navbar'>
          <div className='Burger_Logo_container'>
              <div className='Burger'>
                  <p> </p>
                  <p> </p>
                  <p> </p>
              </div>
              <Link to={'/'} className='logo_div_Navbar'>
                  <img src={Logo} alt='' />
                  <p className='tittle'>Youtube Clone</p>
        </Link>
      </div>
      <SearchBar />
      <RiVideoAddLine size={22} className={"vid_Navbar"} />
      <div className='apps_Box'>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
        <p className='appBox'></p>
      </div>
      <IoMdNotificationsOutline size={22} className='vid_bell' />
      <div className='auth_button'>
        {
          Currentuser ? (<>
            <div className='user_logo'>
              <div className='user_logo2'>
                {
                  Currentuser?.result.name ? (<>
                    {Currentuser?.result.name.charAt(0).toUpperCase()}
                  </>) : (<>
                      {Currentuser?.result.email.charAt(0).toUpperCase()}
                  </>)
                }
              </div>
            </div>
          </>) : (<div className='auth_btn'>
          <BiUserCircle size={22} />
          <b>Sign IN</b>
        </div>)
        }
      </div>
    </div>
  )
}

export default Navbar
