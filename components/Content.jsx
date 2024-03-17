import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';
import LoginPage from './LoginPage';
import {View, Text, Image} from 'react-native';
import logo from '../assets/logo-bigger.png';
import MainPage from './MainPage';

export default function Content() {
  const {userLoc} = useContext(UserLocContext);
  let content;

  if (userLoc === 'login') {
    content = <LoginPage />;
  } else if (userLoc === 'splash') {
    content = (
      <View className="flex flex-1 justify-center items-center bg-gradient-to-t from-[#FFFFFFAD] to-[#E9EFFF]">
        <Image className="my-3 w-[185px] h-[25.23px]" source={logo} />
        <Text className="text-[20px] font-normal">당신 곁에 들리는 소리</Text>
      </View>
    );
  } else if (userLoc === 'home' || userLoc === 'add' || userLoc === 'setting') {
    content = <MainPage tab={userLoc} />;
  }

  return content; 
}
