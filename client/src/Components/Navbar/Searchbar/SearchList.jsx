import React from 'react'
import './SearchList.css'
import { FaSearch } from 'react-icons/fa'

const SearchList = ({TittleArray, setSearch}) => {
  return (
      <div className='searchlist'>
          {
              TittleArray.map(m => {
                  return <p
                      key={m}
                      onClick={event => setSearch(m)}
                      className='searchlistitem'>
              <FaSearch />
              {m}</p>
              })
          }
    </div>
  )
}

export default SearchList
