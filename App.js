import {registerRootComponent} from 'expo';
import React, {createContext, useRef} from 'react';
import {
  View,
  Linking,
  AppState,
  SafeAreaView,
} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import {useEffect, useState} from 'react';
import Login from './src/screens/Login';
import {appStyle, homeStyle} from './src/styles/homeStyle';
import {MMKV} from 'react-native-mmkv';
import HomePage from './src/screens/HomePage';
import { Btn } from './src/components/Button';

export const storage = new MMKV();
export const StorageContext = createContext();

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [supportAuth, setSupportAuth] = useState(0);
  const appState = useRef(AppState.currentState);
  const [status, setStatus] = useState(appState.current);

  useEffect(() => {
    LocalAuthentication.getEnrolledLevelAsync().then(res => {
      setSupportAuth(res);
    });
  }, [status]);

  const onAuthenticate = () => {
    LocalAuthentication.authenticateAsync()
      .then(result => {
        setAuthenticated(result.success);
      })
      .catch(error => {
        alert(error);
      });
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      setStatus(appState.current);
      console.log('AppState', appState.current);
    });
  }, []);

  const logout = () => {
    setAuthenticated(false);
  };

  return (
    <StorageContext.Provider value={storage}>
      <SafeAreaView style={appStyle.container}>
        <View>
          {authenticated ? (
            <HomePage logout={logout} />
          ) : supportAuth ? (
            <View style={{flexDirection:'row', alignSelf:'center'}}>
              <Login onAuthenticate={onAuthenticate} />
            </View>
          ) : (
           
            <View  style={{flexDirection:'row', alignSelf:'center'}}>
               <Btn  title={"Open Security Settings"} handleOnPress={() => {
                 Linking.sendIntent('android.settings.SECURITY_SETTINGS');
             }}/>
            </View>
           
          )}
       
        </View>
      </SafeAreaView>
    </StorageContext.Provider>
  );
}

registerRootComponent(App);
