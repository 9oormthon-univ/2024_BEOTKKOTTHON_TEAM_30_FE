import {Pressable, Text, View} from 'react-native';
import Header from './Header';
import NavBarButton from './NavBarButton';
import add from '../assets/AddButton.png';
import addActivated from '../assets/AddButtonActivated.png';

import home from '../assets/HomeButton.png';
import homeActivated from '../assets/HomeButtonActivated.png';

import setting from '../assets/SettingButton.png';
import settingActivated from '../assets/SettingButtonActivated.png';
import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';

const NavBars = [
  {
    id: 0,
    name: 'add',
    title: '키워드 등록',
    icon: add,
    activated: addActivated,
  },
  {id: 1, name: 'home', title: '홈', icon: home, activated: homeActivated},
  {
    id: 2,
    name: 'setting',
    title: '설정',
    icon: setting,
    activated: settingActivated,
  },
];

export default function MainPage({tab}) {
  const {moveLoc} = useContext(UserLocContext);
  function navHandler(tab) {}
  return (
    <>
      <Header />
      <View className="flex flex-1">
        <Text>구름아</Text>
        <Text>로 가장 많이 불렸어요!</Text>
      </View>

      <View className="mb-9 flex flex-row justify-evenly">
        {NavBars.map(item => (
          <NavBarButton
            key={item.id}
            name={item.name}
            title={item.title}
            icon={item.name === tab ? item.activated : item.icon}
            onPressIn={tab => moveLoc(tab)}
            tab={tab}
          />
        ))}
      </View>
    </>
  );
}
