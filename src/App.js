import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import Navigation from './components/navigation/Navigation'
import UserArtists from './components/userArtists/UserArtists'
import AddArtist from './components/addArtist/AddArtist'
import RelatedArtists from './components/relatedArtists/RelatedArtists'
import Concerts from './components/concerts/Concerts'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navigation />
        <Route exact path='/' component={UserArtists} />
        <Route path='/artist/new' component={AddArtist} />
        <Route path='/artist/related' component={RelatedArtists} />
        <Route path='/concerts' component={Concerts} />
      </div>
    )
  }
}
