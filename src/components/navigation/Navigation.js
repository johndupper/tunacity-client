import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
  render () {
    return (
      <div className={'navigation'}>
        <NavLink exact to='/' className={'navigation-item'}>Tunacity</NavLink>
        <NavLink to='/artist/new' className={'navigation-item'}>Add Artist</NavLink>
        <NavLink to='/artist/related' className={'navigation-item'}>Related Artists</NavLink>
        <NavLink to='/concerts' className={'navigation-item'}>Concerts</NavLink>
      </div>
    )
  }
}
