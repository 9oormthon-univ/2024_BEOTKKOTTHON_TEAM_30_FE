import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import CalledKeywordItem from './CalledKeywordItem';

import loverIcon from '../assets/twinkleLover.png';
import friendIcon from '../assets/twinkleFriend.png';
import workIcon from '../assets/twinkleWork.png';
import familyIcon from '../assets/twinkleFamily.png';
import dailyIcon from '../assets/twinkleDaily.png';

import assignButton from '../assets/assignButton.png';
import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';
import {KeywordsContext} from '../contexts/keywords';

export default function Add() {
  const {moveLoc} = useContext(UserLocContext);
  const {keywords} = useContext(KeywordsContext);
  return (
    <>
      <View>
        <Text className="color-[#606BFF] text-[32px] font-bold">구름아</Text>
        <Text className="color-[#182230] text-[20px] font-bold my-3">
          로 가장 많이 불렸어요!
        </Text>
      </View>

      <View className="mt-10">
        <Text className="color-[#182230] text-[20px] font-bold">
          오늘 많이 불린 키워드
        </Text>
        <View className="flex flex-row justify-between mt-4 mx-3">
          {/* 백에서 정보 받아오기.. */}
          <CalledKeywordItem icon={loverIcon} cnt={0} />
          <CalledKeywordItem icon={friendIcon} cnt={0} />
          <CalledKeywordItem icon={workIcon} cnt={0} />
          <CalledKeywordItem icon={familyIcon} cnt={0} />
          <CalledKeywordItem icon={dailyIcon} cnt={0} />
        </View>
        <View className="mt-5 flex flex-row justify-between items-end mb-2">
          <Text className="text-[20px] font-bold color-[#182230]">
            내 키워드
          </Text>
          <Text className="color-[#606BFF]">편집</Text>
        </View>
        <ScrollView className="mt-2">
          <Pressable
            onPressIn={() => moveLoc('assign')}
            className="bg-[#F2F4F7] flex flex-row items-center rounded-2xl">
            <Image className="m-3" source={assignButton} />
            <Text className="color-[#98A2B3] text-[16px] font-medium">
              키워드 추가하기
            </Text>
          </Pressable>

          <View>
            {keywords.map(item => (
              <View className="flex flex-row" key={item.id}>
                <Image
                  source={
                    item.type === '가족'
                      ? familyIcon
                      : item.type === '일상'
                      ? dailyIcon
                      : item.type === '친구'
                      ? friendIcon
                      : item.type === '직장'
                      ? workIcon
                      : item.type === '연인'
                      ? loverIcon
                      : ''
                  }
                />

                <View className="flex flex-col">
                  <Text>{item.type}</Text>
                  <Text>{item.keywordText}</Text>
                </View>
              </View>
            ))}
            <Text></Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
