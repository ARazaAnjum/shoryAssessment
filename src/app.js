import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import loggerMiddleware from 'redux-logger';
import sagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import './styles/style.less';
import reducers from './reducers/index';
import saga from './sagas/index';
import Home from './containers/home';
import App from './containers/app';
import Video from './containers/video';
import Detail from './containers/detail';
import NoMatch from './components/no-match';

let store = createStore(reducers, applyMiddleware(
  loggerMiddleware(), sagaMiddleware(saga)
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="home" />

        <Route path="home" component={Home} />
        <Route path="video" component={Video} />
        <Route path="detail" component={Detail} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider >,
  document.getElementById('app')
);
