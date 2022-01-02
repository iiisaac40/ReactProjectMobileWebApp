import React from 'react'

import {BrowserRouter as Router, Route} from "react-router-dom"

import Home from './pages/Home'
import CityList from './pages/CityList'
import {Redirect} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">

        <Route path="/" exact render={ () => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
        <Route path="/citylist" component={CityList} />
        
      </div>
    </Router>
  )
}

export default App;
