import {Image, Text, View} from 'react-native';
import leftArrow from '../assets/leftArrow.png';

export default function AssignHeader({text}) {
  return (
    <View className="flex flex-row mx-4 mt-11 justify-between items-end">
      <Image source={leftArrow} />
      <Text className="pt-3 text-[16px] font-bold">{text}</Text>
      <Image />
    </View>
  );
}
