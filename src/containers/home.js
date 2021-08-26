import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/video';


@connect(
  state => ({
    videoId: state.home.get('videoId')
  }),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const url = this.urlParser(this.state.url);
    if (url) {
      this.setState({ videoId: url })
      this.props.actions.saveVideoURL(url);
      this.props.history.push('/video')
    } else {
      alert('Please enter a valid url');
    }
  }

  urlParser = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  }

  render() {
    const { url } = this.state;

    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>WELCOME to SHORY</h1>
        <form className="home-screen-container" onSubmit={this.handleSubmit} method="no">
          <div>
            <h3 style={{ textAlign: 'center' }}>Help me with youtube link which you would like to watch today on youtube: </h3>
            <input
              className="input-field"
              type="text"
              placeholder="Please put your link here"
              name="name"
              onChange={(event) => {
                this.setState({ url: event.target.value });
              }}
              value={url}
            />
          </div>
          <input className="btn-primary" type="submit" value="Take me to VIDEO!" />
        </form>
      </div>
    );
  }

}

export default Home;
