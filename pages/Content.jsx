import {useContext, useState} from 'react';
import {UserLocContext} from '../contexts/userloc';
import {View, Text, Image} from 'react-native';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import AssignPage from './AssignPage';
import SplashPage from './SplashPage';
import GreetingPage from './GreetingPage';
import IntroducePage from './IntroducePage';
import background from '../assets/backgrounds/gradient.png';
import VoicRecog from '../components/VoiceRecog';
import NavBar from '../components/defaults/NavBar';

export default function Content() {
  const {userLoc} = useContext(UserLocContext);
  // const [calledType, setCalledType] = useState('');

  let content;
  // console.log(userLoc);
  if (userLoc === 'splash') {
    content = <SplashPage />;
  } else if (userLoc === 'login') {
    content = <LoginPage />;
  } else if (userLoc === 'greeting') {
    content = <GreetingPage />;
  } else if (userLoc === 'home') {
    content = (
      <>
        {/* <View className={`${calledType && 'bg-black bg-red-900'} absolut top-0 w-full h-full`}> */}
          {/* {calledType && (
            <Image
              source={normal}
              className="absolute opacity-50 w-full h-full"
            />
          )}
          {!calledType && (
            <Image
              source={background}
              className="absolute top-0 w-full h-full"
            />
          )} */}
           <Image
              source={background}
              className="absolute top-0 w-full h-full"
            />

          <MainPage  />
          {/* setCalledType={(val) => setCalledType(val)} */}
          <NavBar  />
          {/* none={calledType} */}
        {/* </View> */}
      </>
    );
  } else if (userLoc === 'add' || userLoc === 'setting') {
    content = (
      <>
        <MainPage />
        <NavBar />
      </>
    );
  } else if (userLoc === 'assign') {
    content = <AssignPage />;
  } else if (userLoc === 'introduce') {
    content = <IntroducePage />;
  }

  return (
    <>
      <VoicRecog />
      {content}
    </>
  );
}
