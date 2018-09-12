import React, { Component } from 'react'

export default class AddArtist extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value
    })
  }

  submitForm (event) {
    event.preventDefault()
    this.setState({
      value: event.target.value
    })
  }

  render () {
    return (
      <div className={'add-artist'}>
        <h1 className={'add-artist-header'}>Add Artist</h1>

        <form onSubmit={this.submitForm}>
          <label>Artist:</label>
          <input
            type='text'
            value={this.state.searchValue}
            onChange={this.handleChange} />
          <input
            type='submit'
            value='Search Artists' />
        </form>
      </div>
    )
  }
}
