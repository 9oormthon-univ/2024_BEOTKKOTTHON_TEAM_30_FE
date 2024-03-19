import {Image, Text, View} from 'react-native';
import twinkle from '../assets/renderTwinkle.png';
import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';

export default function Home() {
  const {userName} = useContext(UserLocContext);
  return (
    <>
      <Image source={twinkle} className="w-[264px] h-[291px] absolute top-[180px] left-[54px]" />
      <View className="flex items-center justify-center top-[457px] ">
        <Text className="text-[32px] font-bold color-[#182230]">
          {userName}님
        </Text>
        <Text className="color-[#667085] text-[20px] font-medium mt-[24px]">
          아직은 아무도 부르지 않았네요!
        </Text>
      </View>
    </>
  );
}
