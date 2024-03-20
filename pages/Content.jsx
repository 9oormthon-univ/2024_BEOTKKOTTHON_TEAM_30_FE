import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';
import {View, Text, Image} from 'react-native';

import LoginPage from './LoginPage';
import MainPage from './MainPage';
import AssignPage from './AssignPage';
import SplashPage from './SplashPage';
import GreetingPage from './GreetingPage';
import IntroducePage from './IntroducePage';
import InitSetting1 from './InitSetting1';
import InitSetting2 from './InitSetting2';

export default function Content() {
  const {userLoc} = useContext(UserLocContext);
  let content;
  console.log(userLoc);
  // loading 기능 구현해주세요!
  if (userLoc === 'loading') {
    content = <SplashPage />;
  }else if (userLoc === 'login') {
    content = <LoginPage />;
  } else if (userLoc === 'greeting') {
    content = <GreetingPage />;
  } else if (userLoc === 'home' || userLoc === 'add' || userLoc === 'setting') {
    content = <MainPage />;
  } else if (userLoc === 'assign') {
    content = <AssignPage />;
  } else if(userLoc === 'introduce'){
    content = <IntroducePage />
  }else if(userLoc === 'init1'){
    content = <InitSetting1 />
  }
  else if(userLoc === 'init2'){
    content = <InitSetting2 />
  }

  return content;
}
