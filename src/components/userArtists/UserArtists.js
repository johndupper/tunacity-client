import React, { Component } from 'react'

export default class UserArtists extends Component {
  render () {
    return (
      <div className={'user-artists'}>
        <h1>My Artists</h1>
        <ul className={'user-artists-list'}>
          <li className={'user-artists-list-artist'}>Artist 1</li>
          <li className={'user-artists-list-artist'}>Artist 2</li>
          <li className={'user-artists-list-artist'}>Artist 3</li>
        </ul>
      </div>
    )
  }
}
