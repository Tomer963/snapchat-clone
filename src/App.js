import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import snapchatLogo from './assets/snapchat-logo.svg';
import Preview from './Preview';
import WebcamCapture from './WebcamCapture';
import Chats from './Chats';
import ChatView from './ChatView';
import { selectUser, login, logout } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

import './App.css';

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            username: authUser.displayName,
            profilePic: authUser.photoURL,
            id: authUser.id,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className='app'>
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img src={snapchatLogo} alt='' className='app__logo' />
            <div className='app__body'>
              <div className='app__bodyBackground'>
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
            </div>
          </>
        )}
      </Router>
    </div>
  );
};

export default App;
