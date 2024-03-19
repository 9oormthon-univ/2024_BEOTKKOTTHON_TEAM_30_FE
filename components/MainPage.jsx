import {Pressable, Text, View} from 'react-native';
import Header from './Header';

import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';
import NavBar from './NavBar';
import Home from './Home';
import Add from './Add';
import Setting from './Setting';

export default function MainPage() {
  const {userLoc} = useContext(UserLocContext);
  let tab;
  if (userLoc === 'home') {
    tab = (
      <View className="flex flex-1 w-full ">
        <Home />
      </View>
    );
  } else if (userLoc === 'add') {
    tab = (
      <View className="flex flex-1 mx-[24px] mt-[40px]">
        <Add />
      </View>
    );
  } else if (userLoc === 'setting') {
    tab = <Setting />;
  }
  return (
    <>
      <Header />
      {tab}
      <NavBar />
    </>
  );
}
