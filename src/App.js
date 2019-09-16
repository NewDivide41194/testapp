import React from 'react'
import MainRoute from './router'
import { BrowserRouter } from 'react-router-dom'

const App=()=>{
   
        return (
          <BrowserRouter>
          <MainRoute/>
          </BrowserRouter>
        )
    
}

export default App;