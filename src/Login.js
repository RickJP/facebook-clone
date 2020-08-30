import React from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import {auth, provider} from './firebase';
import {actionTypes} from './reducer';
import {useStateValue} from './StateProvider';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        dispatch({ 
          type: actionTypes.SET_USER,
          user: res.user
        })
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'
          alt='FaceBook Logo'
        />
        <img
          src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffeedonomics.com%2Fwp-content%2Fuploads%2F2018%2F05%2Ffacebook-logo-full-transparent.png&f=1&nofb=1'
          alt='FaceBook Title Logo'
        />
      </div>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
