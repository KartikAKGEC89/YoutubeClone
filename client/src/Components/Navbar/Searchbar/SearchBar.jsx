import React from 'react'
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa'
import { BsMicFill } from 'react-icons/bs'

const SearchBar = () => {
  return (
      <>
          <div className='search_container'>
              <div className='search_conatiner2'>
                  <div className='search_div'>
                      <input type='text' className='iBox_search' placeholder='Search...' />
                      <FaSearch className='searchicon_searchbar' />
                      <BsMicFill className='searchicon_mic' />
                  </div>    
              </div>
          </div>
    </>
  )
}

export default SearchBar
