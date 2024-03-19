/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import VoicRecog from './components/VoiceRecog';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {UserLocContextProvider} from './contexts/userloc';
import Content from './components/Content';
import {KeywordsContextProvider} from './contexts/keywords';


import loverIcon from './assets/twinkleLover.png';
import friendIcon from './assets/twinkleFriend.png';
import workIcon from './assets/twinkleWork.png';
import familyIcon from './assets/twinkleFamily.png';
import dailyIcon from './assets/twinkleDaily.png';
import emergencyIcon from './assets/twinkleRed.png';


const toastConfig = {
  newToast: ({text1}) => (
    <View className="border-solid border-[1px] border-gray-300 rounded-xl flex flex-row justify-center items-center w-[345px] h-[56px] bg-white">
      <Image source={loverIcon} />
      <Text>{text1}</Text>
    </View>
  ),
};

function App(): React.JSX.Element {
  function showToast() {
    Toast.show({
      type: 'newToast',
      text1: '친구가 구름님을 부르고 있나봐요!',
      
    });
  }

  return (
    <UserLocContextProvider>
      <KeywordsContextProvider>
        <NavigationContainer>
          <View className="flex flex-1 border-solid">
            <Content />
            {/* <VoicRecog /> */}

            <Button title="show toast" onPress={showToast}>
              click here to test Toast message
            </Button>
          </View>
          <Toast config={toastConfig} />
        </NavigationContainer>
      </KeywordsContextProvider>
    </UserLocContextProvider>
  );
}

export default App;
