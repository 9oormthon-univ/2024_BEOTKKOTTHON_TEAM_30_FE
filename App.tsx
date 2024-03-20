/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {View} from 'react-native';
import React, { useEffect, useState } from 'react';
import VoicRecog from './components/VoiceRecog';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {UserLocContextProvider} from './contexts/userloc';
import Content from './components/Content';
import Splash from './components/Splash';

function App(): React.JSX.Element {
  function showToast() {
    Toast.show({
      type: 'success',
      text1: 'keyword recognized!',
      text2: 'keyword',
    });
  }

  const [currentScreen, setCurrentScreen] = useState('Splash');

  useEffect(() => {
    // 3초 후에 Splash 종료 

    setTimeout(() => {
      setCurrentScreen('Main');
    }, 3000);
  }, []);

  return (
    <UserLocContextProvider>
      <NavigationContainer>
        <View className="flex flex-1 border-solid">
          {currentScreen==='Splash' ?  <Splash/> : <Content/> }
          {/* <VoicRecog /> */}

          {/* <Button title="show toast" onPress={showToast}>
          click here to test Toast message
        </Button> */}
        </View>
        <Toast />
      </NavigationContainer>
    </UserLocContextProvider>
  );
}

export default App;
