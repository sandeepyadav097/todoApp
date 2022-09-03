import React from 'react';
import {Button} from 'react-native';
import {Btn} from '../components/Button';

const Login = props => {
  return <Btn title="Login" handleOnPress={props.onAuthenticate} />;
};

export default Login;
