import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Preview from './Preview';
import WebcamCapture from './WebcamCapture';
import Chats from './Chats';
import ChatView from './ChatView';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <div className='app__body'>
          <Switch>
            <Route path='/chats/view'>
              <ChatView />
            </Route>
            <Route path='/chats'>
              <Chats />
            </Route>
            <Route path='/preview'>
              <Preview />
            </Route>
            <Route path='/'>
              <WebcamCapture />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
