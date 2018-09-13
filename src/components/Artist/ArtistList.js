import React from 'react'
import Artist from './Artist'
import ArtistNotFound from './ArtistNotFound'

const ArtistList = props => (
  props.data && props.data.length
    ? props.data.map(artist => <Artist data={artist} key={artist.strArtist} />)
    : <ArtistNotFound />
)

export default ArtistList
