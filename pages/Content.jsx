import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';
import {View, Text, Image} from 'react-native';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import AssignPage from './AssignPage';
import SplashPage from './SplashPage';
import GreetingPage from './GreetingPage';
import IntroducePage from './IntroducePage';
import background from '../assets/backgrounds/gradient.png';

export default function Content() {
  const {userLoc} = useContext(UserLocContext);
  let content;
  console.log(userLoc);
  // loading 기능 구현해주세요!
  if (userLoc === 'splash') {
    content = <SplashPage />;
  } else if (userLoc === 'login') {
    content = <LoginPage />;
  } else if (userLoc === 'greeting') {
    content = <GreetingPage />;
  } else if (userLoc === 'home') {
    content = (
      <>
        <Image source={background} className="absolute top-0 w-full h-full" />
        <MainPage />
      </>
    );
  } else if (userLoc === 'add' || userLoc === 'setting') {
    content = <MainPage />;
  } else if (userLoc === 'assign') {
    content = <AssignPage />;
  } else if (userLoc === 'introduce') {
    content = <IntroducePage />;
  }

  return content;
}
