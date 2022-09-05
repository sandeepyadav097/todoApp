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


// MMKV is being used for localStorage so that we can save our todos locally.
// Using Context for storage to avoid prop drilling across helpers and components
export const storage = new MMKV();
export const StorageContext = createContext();

export default function App() {
  const [authenticated, setAuthenticated] = useState(false); // state for login status
  const [supportAuth, setSupportAuth] = useState(0); // state for checking auth status (PIN/Fingerprint/None)
  const appState = useRef(AppState.currentState);
  const [status, setStatus] = useState(appState.current); // status for checking current status of app (Foreground/Background)

  // Fetch levels of authentication (0 - None, 1 - PIN, 2 - Fingerprint)
  useEffect(() => {
    LocalAuthentication.getEnrolledLevelAsync().then(res => {
      setSupportAuth(res);
    }).catch((error) => {
      console.log(error)
    });
  }, [status]);

  // Expo's authentication module 
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
    
    // Conditional for checking if the is in Foreground/Backgrund State
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      setStatus(appState.current);
      console.log('AppState', appState.current);
    });
  }, []);

  // Conditional for Logout
  const logout = () => {
    setAuthenticated(false);
  };

  // Show security settings button if security is enabled. Else show login button. 
  // On successful authentication, show Homepage
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
