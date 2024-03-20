import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import twinkle from '../../assets/twinkles/animation.png';
import {useContext, useEffect, useRef} from 'react';
import {UserLocContext} from '../../contexts/userloc';
import {Image} from 'expo-image';

export default function Home() {
  const {userName} = useContext(UserLocContext);

  return (
    <>
      <View className="flex flex-1 justify-center items-center" >
        <Image
          className="w-[320px] h-[352.72px] flex-1 absolute bottom-[320px] left-[40px]"
          source={twinkle}
          contentFit="cover"
          transition={1000}
        />
      </View>

      <View className="flex items-center justify-center absolute top-[420px] w-full">
        <Text className="text-[32px] font-bold color-[#182230]">
          {userName}님
        </Text>
        <Text className="color-[#667085] text-[20px] font-medium my-[24px]">
          아직은 아무도 부르지 않았네요!
        </Text>
        {/* <Pressable className="bg-[#606BFF] w-[110px] h-[52px] flex justify-center items-center rounded-[33px] my-[16px]">
          <Text className="color-white text-[16px] font-bold">확인</Text>
        </Pressable> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '80%'
  },
});
