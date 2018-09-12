import React from 'react'

const Artist = props => {
  const artist = props.data

  /** @namespace artist.strArtist */
  /** @namespace artist.strArtistThumb */

  return (
    <div>
      <h2>{artist.strArtist}</h2>
      <img className='artist-thumbnail'
        src={artist.strArtistThumb}
        alt={artist.strArtist} />
    </div>
  )
}

export default Artist
