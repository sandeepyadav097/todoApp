import React from 'react';
import {Btn} from '../components/Button';

// Login Page 
const Login = props => {
  return <Btn title="Login" handleOnPress={props.onAuthenticate} />;
};

export default Login;
