import React from 'react'
import './SearchBar.css'
import { FaSearch } from 'react-icons/fa'
import { BsMicFill } from 'react-icons/bs'
import SearchList from './SearchList'

const SearchBar = () => {
    const [search, setSearch] = React.useState("")
    const[disapper, setDisapper] = React.useState(false)
    const TittleArray = ["video1", "video2", "video3", "movies"].filter(q => q.toUpperCase().includes(search.toUpperCase()));
    function list(event) {
        setSearch(event.target.value)
    }

    function dispp() {
        setDisapper(true)
    }
  return (
      <>
          <div className='search_container'>
              <div className='search_conatiner2'>
                  <div className='search_div'>
                      <input type='text' className='iBox_search' placeholder='Search...' onChange={list} 
                          value={search}
                      />
                      <FaSearch className='searchicon_searchbar' onClick={dispp} />
                      <BsMicFill className='searchicon_mic' />
                      { search && disapper &&
                          <SearchList 
                          setSearch={setSearch}
                          TittleArray={TittleArray}
                        />
                      }
                  </div>    
              </div>
          </div>
    </>
  )
}

export default SearchBar
