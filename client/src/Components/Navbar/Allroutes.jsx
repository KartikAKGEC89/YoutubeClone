import React from 'react'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from '../../Pages/Home/Home';

const Allroutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default Allroutes
