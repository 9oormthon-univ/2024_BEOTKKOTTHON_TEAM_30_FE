import {Pressable, Text, View} from 'react-native';
import Header from '../components/defaults/Header';

import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';
import NavBar from '../components/defaults/NavBar';
import Home from '../components/mainPage/Home';
import Add from '../components/mainPage/Add';
import Setting from '../components/mainPage/Setting';
import introduce from '../assets/buttons/introduce.png'; 

export default function MainPage({setCalledType}) {
  const {userLoc} = useContext(UserLocContext);
  let tab;
  if (userLoc === 'home') {
    tab = (
      <>
        <Header forward={introduce} />
        <View className="flex flex-1 w-full">
          <Home setCalledType={setCalledType} />
        </View>
      </>
    );
  } else if (userLoc === 'add') {
    tab = (
      <>
        <Header />
        <View className="flex flex-1 mx-[24px] mt-[40px]">
          <Add />
        </View>
      </>
    );
  } else if (userLoc === 'setting') {
    tab = (
      <>
        <Header />
        <Setting />
      </>
    );
  }
  return (
    <>
      {tab}
    </>
  );
}
