import {View} from 'react-native';

import home from '../../assets/buttons/home.png';
import add from '../../assets/buttons/assign.png';
import setting from '../../assets/buttons/setting.png';

import NavBarButton from './NavBarButton';

import homeActivated from '../../assets/buttons/home-a.png';
import addActivated from '../../assets/buttons/assign-a.png';
import settingActivated from '../../assets/buttons/setting-a.png';





import {useContext} from 'react';
import { UserLocContext } from '../../contexts/userloc';

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

export default function NavBar({none}) {
  const {userLoc, moveLoc} = useContext(UserLocContext);
  

  return (
    <View className={`pb-[36px] h-[100px] flex flex-row items-center justify-evenly bg-white  border-t-[1px]  border-gray-200  ${none && 'opacity-0'}`}>
      {NavBars.map(item => (
        <NavBarButton
          key={item.id}
          name={item.name}
          title={item.title}
          icon={item.name === userLoc ? item.activated : item.icon}
          onPressIn={tab => moveLoc(tab)}
          tab={userLoc}
        />
      ))}
    </View>
  );
}
