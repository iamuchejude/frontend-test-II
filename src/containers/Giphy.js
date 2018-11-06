import React, { Component } from 'react';
import avatarImage from '../assets/images/avatar.png'

class Giphy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gif: '',
      giphy: [],
      loading: false,
      message: '',
    };
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value  })
  }

  onSubmit(e) {
    e.preventDefault();
    const { gif, giphy } = this.state;
    this.setState({ loading: true, message: '' });

    if ( !gif || gif.length < 1) {
      return this.setState({ message: 'Kindly input a text', loading: false, gif: '' });
    }

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${gif}&limit=${1}`, {
      headers: {
        'Content-type': 'application/json',
      }
    }).then(res => res.json())
    .then((data) => {
      if (data.data.length < 1) {
        return this.setState({ message: 'Gif was not found', loading: false, gif: '' });
      } else {
        const gifData = data.data[0].images.fixed_width_small.url;
        this.setState({ giphy: [...this.state.giphy, gifData]});
        this.setState({ loading: false, message: '', gif: '' });
      }
    })
    .catch(() =>  this.setState({ message: 'Oops! Server error occured. Please try again later.', loading: false, gif: '' }));
  }

  render() {
    const { gif, loading, giphy, message } = this.state;
    return (
      <div id="giphy">
        <div className="chat_header">
          <i className="fa fa-comments" /> Giphy Chat
        </div>
        <div className="chat_contents">
          { giphy.length < 1 ? <p className="message">😞 No chat records found!</p> : 
            giphy.map((gifItem, i) => (
              <div className="singleChat" key={ i }>
                <div className="gifImage">
                  <img src={ gifItem } alt="gif" />
                </div>
                <div className="userImage">
                  <img src={ avatarImage } alt="user" />
                </div>
              </div>
            ))
          }
        </div>
        <div className="chat_control">
          <form onSubmit={ this.onSubmit.bind(this) }>
            <input type="text" placeholder="Enter text" readOnly={ loading } onChange={ this.onChange.bind(this) } value={ gif || '' } name="gif" />
            <button type="submit" disabled={ loading ? 'disabled' : '' } >{ loading ? <i className="fa fa-spinner fa-spin" /> : 'Send' }</button>
          </form>
          { message ? <p className="form_message">{message}</p> : '' }
        </div>
      </div>
    )
  }
}

export default Giphy;
