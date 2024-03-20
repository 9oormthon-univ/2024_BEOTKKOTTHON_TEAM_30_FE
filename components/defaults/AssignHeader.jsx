import {Image, Pressable, Text, View} from 'react-native';
import leftArrow from '../../assets/buttons/back.png';
import { useContext } from 'react';
import { UserLocContext } from '../../contexts/userloc';

export default function AssignHeader({text}) {
  const {moveLoc} = useContext(UserLocContext); 
  return (
    <View className="flex flex-row mx-[16px] mt-[44px] justify-between items-end">
      <Pressable onPressIn={()=>{moveLoc('add')}}>
        <Image source={leftArrow} />
      </Pressable>
      <Text className="pt-3 text-[16px] font-bold">{text}</Text>
      <Image />
    </View>
  );
}
