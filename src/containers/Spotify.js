import React, { Component } from 'react';
import ArtistInfo from '../components/ArtistInfo';
import RelatedArtists from '../components/RelatedArtists';

class Spotify extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: {
        
      },
    };
  }

  render() {
    return (
      <div id="spotify">
        <ArtistInfo />
        <RelatedArtists />
      </div>
    );
  }
}

export default Spotify;
