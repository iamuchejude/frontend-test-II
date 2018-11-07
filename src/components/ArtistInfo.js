import React, { Component, Fragment } from 'react';

class ArtistInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: null,
    }
  }

  componentDidMount() {
    const { token } = localStorage;

    fetch(`https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(res => res.json())
    .then(data => {
      this.setState({ artist: data })
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <Fragment>
        { 
          !this.state.artist ? 'loading.....' :
          <div className="info">
            <div className="photo">
             <img src={ this.state.images[0].url } alt={ this.state.name } />
            </div>
            <div className="profile">
              <ul>
                <li className="name"> { this.state.name } </li>
                <li className="followers"><i className="fa fa-user" /> { this.state.followers.total } Followers </li>
                <li className="genres">
                  {
                    this.state.genres.map(genre => <span>{ genre }</span>)
                  }
                </li>
              </ul>
            </div>
          </div>
        }
    </Fragment>
  )
  }
}

export default ArtistInfo;
