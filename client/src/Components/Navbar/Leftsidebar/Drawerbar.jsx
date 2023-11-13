import React from 'react'
import './Drawerbar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore, MdSubscriptions } from 'react-icons/md'
import { FiFolderPlus } from 'react-icons/fi'

const Drawerbar = () => {
  return (
    <div className='containerdrawer_bar'>
        <div className='containerdrawer_bar2'>
              <div className='Drawer_leftsidebar'>
                  <div className='icon_sidebar_div'>
                      <p>
                          <AiOutlineHome size={22} className={"icon_sidebar"}
                              style={{ margin: "auto 0.7rem" }} />
                          <div className='text_sidebar_icon'>
                              Home
                          </div>
                      </p>
                        <p>
                          <MdOutlineExplore size={22} className={"icon_sidebar"}
                              style={{ margin: "auto 0.7rem" }} />
                          <div className='text_sidebar_icon'>
                              Explorer
                          </div>
                      </p>
                      <p>
                          <FiFolderPlus size={22} className={"icon_sidebar"}
                              style={{ margin: "auto 0.7rem" }} />
                          <div className='text_sidebar_icon'>
                              Shorts
                          </div>
                      </p>
                      <p>
                          <MdSubscriptions size={22} className={"icon_sidebar"}
                              style={{ margin: "auto 0.7rem" }} />
                          <div className='text_sidebar_icon'>
                              Shorts
                          </div>
                      </p>
                  </div>
                  
            </div>
        </div>
    </div>
  )
}

export default Drawerbar
