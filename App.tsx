/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import VoicRecog from './components/VoiceRecog';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {UserLocContextProvider} from './contexts/userloc';
import Content from './components/Content';

function App(): React.JSX.Element {
  function showToast() {
    Toast.show({
      type: 'success',
      text1: 'keyword recognized!',
      text2: 'keyword',
    });
  }

  return (
    <UserLocContextProvider>
      <NavigationContainer>
        <View className="flex flex-1 border-solid">
          <Content />
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
