import {Image, Pressable, Text, View} from 'react-native';
import twinkle from '../assets/renderTwinkle.png';
import background from '../assets/background.png';
import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';

export default function Home() {
  const {userName} = useContext(UserLocContext);
  return (
    <>
      <Image source={background} className="absolute top-0 w-full h-full" />
      <Image
        source={twinkle}
        className="w-[500px] h-[330.68px] absolute top-[110px] left-[-15px]"
      />
      <View className="flex items-center justify-center top-[420px] ">
        <Text className="text-[32px] font-bold color-[#182230]">
          {userName}님
        </Text>
        <Text className="color-[#667085] text-[20px] font-medium my-[24px]">
          아직은 아무도 부르지 않았네요!
        </Text>
        <Pressable className="bg-[#606BFF] w-[110px] h-[52px] flex justify-center items-center rounded-[33px] my-[16px]">
          <Text className="color-white text-[16px] font-bold">확인</Text>
        </Pressable>
      </View>
    </>
  );
}
