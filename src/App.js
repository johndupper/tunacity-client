import React, { Component } from 'react'
import './App.css'

import Navigation from './components/navigation/Navigation'
import UserArtists from './components/userArtists/UserArtists'
import AddArtist from './components/addArtist/AddArtist'
import Concerts from './components/concerts/Concerts'
import RelatedArtists from './components/relatedArtists/RelatedArtists'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navigation />
        <UserArtists />
        <AddArtist />
        <Concerts />
        <RelatedArtists />
      </div>
    )
  }
}

export default App
