import * as actionTypes from '../actions/types';
import { Map } from 'immutable';

let reducers = {
  videoId: '',
  urlTime: 0,
  urlElapsedTime: {
    currentTime: new Date().getTime(),
    elapsedTime: 0
  },
};

reducers[actionTypes.SAVE_VIDEO_URL_TIME] = (state, action) => {
  return state.set('urlTime', action.value || 0);
};

reducers[actionTypes.SAVE_VIDEO_URL_ELAPSED_TIME] = (state, action) => {
  return state.set('urlElapsedTime', action.value || 0);
};

reducers[actionTypes.SAVE_VIDEO_URL] = (state, action) => {
  return state.set('videoId', action.value || '').set('urlElapsedTime', {
    currentTime: new Date().getTime(),
    elapsedTime: 0
  });
};

export default (state = Map({}), action) => {
  let reducer = reducers[action.type];
  return reducer ? reducer(state, action) : state;
}
