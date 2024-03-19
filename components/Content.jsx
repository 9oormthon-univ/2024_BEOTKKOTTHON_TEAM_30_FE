import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';
import LoginPage from './LoginPage';
import {View, Text, Image} from 'react-native';

import MainPage from './MainPage';
import AssignPage from './AssignPage';
import SplashPage from './GreetingPage';
import GreetingPage from './GreetingPage';

export default function Content() {
  const {userLoc} = useContext(UserLocContext);
  let content;

  if (userLoc === 'login') {
    content = <LoginPage />;
  } else if (userLoc === 'greeting') {
    content = <GreetingPage />
  } else if (userLoc === 'home' || userLoc === 'add' || userLoc === 'setting') {
    content = <MainPage />;
  } else if(userLoc === 'assign'){
    content = <AssignPage />
  }

  return content; 
}
