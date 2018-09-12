import React, { Component } from 'react'

export default class Navigation extends Component {
  render () {
    return (
      <div className={'navigation'}>
        <p className={'navigation-option'}>Tunacity</p>
        <p className={'navigation-option'}>Add Artist</p>
        <p className={'navigation-option'}>Concerts</p>
        <p className={'navigation-option'}>Related Artists</p>
        <p className={'navigation-option'}>Login</p>
      </div>
    )
  }
}
