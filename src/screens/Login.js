import React from 'react';
import {Btn} from '../components/Button';

const Login = props => {
  return <Btn title="Login" handleOnPress={props.onAuthenticate} />;
};

export default Login;
