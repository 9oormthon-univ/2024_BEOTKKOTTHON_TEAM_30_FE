/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Button, View, Text, Image} from 'react-native';
import Toast from 'react-native-toast-message';
import {NavigationContainer} from '@react-navigation/native';
import {UserLocContextProvider} from './contexts/userloc';
import Content from './pages/Content';
import {KeywordsContextProvider} from './contexts/keywords';
import {SettingsContextProvider} from './contexts/settings';
// import SendSound from './components/SendSound';
import RecordSound from './components/RecordSound';

const toastConfig = {
  newToast: ({text1}) => (
    <View className="border-solid border-[1px] border-gray-300 rounded-xl flex flex-row justify-start gap-4 items-center w-[345px] h-[70px] bg-white">
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

  const [parsedRecord, setParsedRecord] = useState(); 
  // console.log(parsedRecord); 
  
  // return <RecordSound setParsedRecord={(val)=>setParsedRecord(val)} />; 



  return (
    <UserLocContextProvider>
      <SettingsContextProvider>
        <KeywordsContextProvider>
          <NavigationContainer>
            <View className="flex flex-1">
              <Content />

              {/* <Button title="show toast" onPress={showToast}>
                click here to test Toast message
              </Button> */}
            </View>
            <Toast config={toastConfig} />
          </NavigationContainer>
        </KeywordsContextProvider>
      </SettingsContextProvider>
    </UserLocContextProvider>
  );
}

export default App;
