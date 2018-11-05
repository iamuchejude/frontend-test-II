import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class SpotifyCallback extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const paramsString = window.location.href.split('#')[1];
    const params = new URLSearchParams(paramsString);

    localStorage.setItem('token', params.get('access_token'));
    localStorage.setItem('expiresIn', params.get('expires_in',));
    localStorage.setItem('isAuthenticated', true);

    return (
      <Redirect to='/spotify' />
    );
  }
}

export default SpotifyCallback;
