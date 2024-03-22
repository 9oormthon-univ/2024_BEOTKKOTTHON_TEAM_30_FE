import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import movingTwinkle from '../../assets/twinkles/animation.png';
import twinkle from '../../assets/twinkles/stopped.png';
import {useContext, useEffect, useRef, useState} from 'react';
import {UserLocContext} from '../../contexts/userloc';
import {Image} from 'expo-image';
import {KeywordsContext} from '../../contexts/keywords';
import { vibrationMaker } from '../../functions/vibrationMaker';

const mungu = {
  친구: '친구가 날 부르고 있나봐요!',
  연인: '연인이 날 부르고 있나봐요!',
  가족: '가족이 날 부르고 있나봐요!',
  직장: '직장동료가 날 부르고 있나봐요!',
  긴급: '주변을 살펴볼까요?'
};

export default function Home() {
  const {userName} = useContext(UserLocContext);
  const {nowCalled, call} = useContext(KeywordsContext);
  const [isChanged, setIsChanged] = useState(false);
  // console.log(nowCalled);

  useEffect(() => {
    if (nowCalled) {
      setIsChanged(true);
      vibrationMaker();
      // setCalledType(nowCalled.type);
    } else {
      setIsChanged(false);
      // setCalledType(null);
    }
  }, [nowCalled]);

  return (
    <>
      <View className="flex flex-1 justify-center items-center">
        <Image
          className="w-[320px] h-[352.72px] flex-1 absolute bottom-[290px] left-[20px]"
          source={isChanged ? movingTwinkle : twinkle}
          contentFit="cover"
          transition={1000}
        />
      </View>

      <View className="flex items-center justify-center absolute top-[420px] w-full">
        <Text className={`text-[32px] font-bold ${nowCalled.type === '긴급' ? 'color-[#FF6060]': isChanged ? 'color-[#606BFF]' : 'color-[#182230]'}`}>
          {!isChanged && `${userName}님`}
          {isChanged && `"${nowCalled.keywordText}"`}
        </Text>
        <Text className={`'color-[#667085] text-[20px] font-medium my-[24px]`}>
          {!isChanged && '아직은 아무도 부르지 않았네요!'}
          {isChanged && mungu[nowCalled.type]}
        </Text>
        {isChanged && (
          <Pressable
            onPressIn={() => {
              call(false);
            }}
            className={`${nowCalled.type === '긴급' ? 'bg-[#FF6060]' : 'bg-[#606BFF]'} w-[110px] h-[52px] flex justify-center items-center rounded-[33px] my-[16px]`}>
            <Text className="color-white text-[16px] font-bold">확인</Text>
          </Pressable>
        )}
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
    height: '80%',
  },
});
