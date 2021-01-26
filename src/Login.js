import React from 'react';

import { Button } from '@material-ui/core';
import snapchatLogo from './assets/snapchat-logo.svg';
import { auth, provider } from './firebase';
import { login } from './features/appSlice';

import './Login.css';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          login({
            username: result.user.displayName,
            profilePic: result.user.photoURL,
            id: result.user.uid,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img src={snapchatLogo} alt='Snapchat Logo' />
        <Button variant='outlined' onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
