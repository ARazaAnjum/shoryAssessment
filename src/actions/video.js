import * as actionTypes from './types';

export const saveVideoURLTime = value => {
  return {
    type: actionTypes.SAVE_VIDEO_URL_TIME,
    value: value
  }
};

export const saveVideoURLElapsedTime = value => {
  return {
    type: actionTypes.SAVE_VIDEO_URL_ELAPSED_TIME,
    value: value
  }
};

export const saveVideoURL = value => {
  return {
    type: actionTypes.SAVE_VIDEO_URL,
    value: value
  }
};

export const timeout = () => {
  return {
    type: actionTypes.TIMEOUT_REQUESTED_TYPE
  }
};
