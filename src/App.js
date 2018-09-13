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
        {/* render is how props are passed to component */}
        <Route exact path='/' render={() => <UserArtists />} />
        <Route exact path='/artist/new' component={AddArtist} />
        <Route exact path='/artist/related' component={RelatedArtists} />
        <Route exact path='/concerts' component={Concerts} />
      </div>
    )
  }
}
