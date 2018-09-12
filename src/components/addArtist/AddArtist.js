import React, { Component } from 'react'
import axios from 'axios'

import SearchForm from './SearchForm'
import ArtistList from '../Artist/ArtistList'

export default class AddArtist extends Component {
  constructor (props) {
    super(props)
    this.state = { artists: null }
    this.search = this.search.bind(this)
  }

  search (artist) {
    axios.get(`http://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`)
      .then(response => { this.setState({ artists: response.data.artists || [] }) })
      .catch(error => { console.error(error.message) })
  }

  render () {
    return (
      <div className={'add-artist'}>
        <h1 className={'add-artist-header'}>Add Artist</h1>
        <SearchForm onSearch={this.search} />
        <div>
          {
            (this.state.artists)
              ? <ArtistList data={this.state.artists} />
              : <p>Let's find some music!</p>
          }
        </div>
      </div>
    )
  }
}
