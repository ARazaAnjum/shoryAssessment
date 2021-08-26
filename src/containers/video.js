import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/video';
import YouTube from 'react-youtube';

@connect(
  state => {
    return ({
      videoId: state.home.get('videoId'),
      urlTime: state.home.get('urlTime'),
      urlElapsedTime: state.home.get('urlElapsedTime'),
    })
  },
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)


class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.player = null;
  }

  componentDidMount() {
    if (!this.props.videoId) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>VIDEO PLAYER</h1>
        <div className="youtube-container">
          {!!this.props.videoId && <YouTube
            videoId={this.props.videoId}
            opts={{
              height: '390',
              width: '640',
              playerVars: {
                autoplay: 1,
                start: !!this.props.urlElapsedTime && this.props.urlElapsedTime.elapsedTime ? parseInt(this.props.urlElapsedTime.elapsedTime) : 0
              },
            }}
            onReady={(e) => {
              this.player = e.target;
              this.props.actions.saveVideoURLTime(e.target.getDuration());
            }}
          />}
          <button className="btn-primary" onClick={() => this.props.history.goBack()}>EDIT</button>
          <button className="btn-primary" style={{ marginLeft: '20px' }} onClick={() => {
            this.props.actions.saveVideoURLElapsedTime({
              currentTime: new Date().getTime(),
              elapsedTime: this.player.getCurrentTime()
            })
            this.props.history.push('/detail')
          }}>GO TO PAGE 2</button>

        </div>
      </div>
    );
  }

}

export default VideoPlayer;
