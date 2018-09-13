import React, { Component } from 'react'

export default class UserArtists extends Component {
  render () {
    return (
      <div className={'user-artists'}>
        <h1>My Artists</h1>
        <h2>Welcome, New User!</h2>
        <ul className={'user-artists-list'}>
          {/* user artists */}
        </ul>
      </div>
    )
  }
}
