import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/video';

@connect(
  state => {
    return ({
      urlElapsedTime: state.home.get('urlElapsedTime'),
      videoId: state.home.get('videoId'),
      urlTime: state.home.get('urlTime')
    })
  },
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)

class Detail extends Component {

  componentDidMount() {
    if (!this.props.videoId) {
      this.props.history.push('/');
    }
  }

  onBack = () => {
    this.props.actions.saveVideoURLElapsedTime({
      currentTime: new Date().getTime(),
      elapsedTime: ((new Date().getTime() - this.props.urlElapsedTime.currentTime) / 1000) + this.props.urlElapsedTime.elapsedTime
    })
    this.props.history.goBack();
  }

  render() {
    return (
      <button onClick={this.onBack}>
        <img src={require('../images/back.gif')} width="250" />
      </button>
    );
  }

}

export default Detail;
