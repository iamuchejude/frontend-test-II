import React, { Component, Fragment } from 'react';

class ArtistInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
    };
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
    
    const { followers, genres, images, name, popularity, type } = this.state.artist;
    return (
      <Fragment>
        { 
          !this.state.artist ? 'loading.....' :
          <div className="info">
            <div className="photo">
             <img src={ images[0].url } alt={ name } />
            </div>
            <div className="profile">
              <ul>
                <li className="name"> { name } </li>
                <li className="followers"><i className="fa fa-user" /> { followers.total } Followers </li>
                <li className="genres">
                  {
                    genres.map(genre => <span>{ genre }</span>)
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
