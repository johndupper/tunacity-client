import React from 'react'
import Artist from './Artist'

const ArtistList = props => {
  if (!props.data.length) return null
  return props.data.map(artist => <Artist data={artist} key={artist.strArtist} />)
}

export default ArtistList
