import React, { Component } from 'react'

export default class SearchForm extends Component {
  constructor (props) {
    super(props)
    this.state = { searchText: '' }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange (event) {
    this.setState({ searchText: event.target.value })
  }

  onSubmit (event) {
    event.preventDefault()
    /** @namespace props.onSearch */
    this.props.onSearch(this.state.searchText)
    event.currentTarget.reset()
  }

  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Search</label>
        <input type='text' value={this.state.value} onChange={this.onChange} />
        <input type='submit' value='Search' />
      </form>
    )
  }
}
