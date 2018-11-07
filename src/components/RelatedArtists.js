import React, { Component } from 'react';
import PropType from 'prop-types';

class RelatedArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: null,
    };
  }

  componentDidMount() {
    const { token } = localStorage;

    fetch(`https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/related-artists`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(res => res.json())
    .then(data => { this.setState({ artists: data.artists.splice(0, 10) }); console.log(data.artists.splice(0, 10)) })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="related_artists">
        <div className="header"> Related Artists </div>
        {
          !this.state.artists ? 'loading....' : 
          this.state.artists.map(artist => {
            const { name, images, id, followers, type } = artist;
            return (
              <div className="singleRelatedArtist" key={ id } >
                <div className="photo">
                  <img src={ images[0].url } alt={ name } />
                  </div>
                  <div className="profile">
                    <ul>
                      <li className="name"> { name } </li>
                      <li className="followers"><i className="fa fa-user" /> { followers.total } Followers </li>
                      <li className="type"><span>{ type }</span></li>
                    </ul>
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default RelatedArtists;
