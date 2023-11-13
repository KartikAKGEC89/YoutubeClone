import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
import Home from '../../Pages/Home/Home';
import Library from '../../Pages/Home/Library/Library';

const Allroutes = () => {
  return (
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Library' element= {<Library />} />
    </Routes>
  )
}

export default Allroutes
