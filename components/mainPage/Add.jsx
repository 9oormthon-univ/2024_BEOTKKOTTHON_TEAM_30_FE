import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import CalledKeywordItem from '../addTab/CalledKeywordItem';

import workIcon from '../../assets/twinkles/work-a.png';
import familyIcon from '../../assets/twinkles/family-a.png';
import friendIcon from '../../assets/twinkles/friend-a.png';
import emergencyIcon from '../../assets/twinkles/red-a.png';
import loverIcon from '../../assets/twinkles/lover-a.png';
import DeleteIcon from '../../assets/buttons/delete.png';

import assignButton from '../../assets/buttons/add.png';
import {useContext, useState} from 'react';
import {UserLocContext} from '../../contexts/userloc';
import {KeywordsContext} from '../../contexts/keywords';
import Keyword from '../addTab/Keyword';

const CalledKeywords = [
  {id: 0, type: '가족', icon: familyIcon},
  {id: 1, type: '직장', icon: workIcon},
  {id: 2, type: '친구', icon: friendIcon},
  {id: 3, type: '연인', icon: loverIcon},
  {id: 4, type: '긴급', icon: emergencyIcon},
];

export default function Add() {
  const {moveLoc} = useContext(UserLocContext);
  const {keywords, removeKeyword, calledCnt} = useContext(KeywordsContext);
  // console.log(calledCnt);
  //편집
  const [editActive, setEditActive] = useState(false);

  function editBtnHandler() {
    setEditActive(!editActive);
  }

  return (
    <>
      <View>
        <Text className="color-[#606BFF] text-[32px] font-bold">구름아</Text>
        <Text className="color-[#182230] text-[20px] font-bold my-[12px]">
          로 가장 많이 불렸어요!
        </Text>
      </View>

      <View className="mt-8">
        <Text className="color-[#475467] text-[16px] font-bold">
          키워드 불린 횟수
        </Text>
        <View className="flex flex-row justify-between mt-[16px] mx-[12px]">
          {CalledKeywords.map(item => (
            <CalledKeywordItem
              key={item.id}
              icon={item.icon}
              cnt={Math.floor(calledCnt[item.type]/3)}
            />
          ))}
        </View>
        <View className="mt-[48px] flex flex-row justify-between items-end mb-[8px]">
          <Text className="text-[16px] font-bold color-[#475467]">
            내 키워드
          </Text>
          <Pressable onPress={editBtnHandler}>
            <Text className="color-[#606BFF]">
              {!editActive ? '편집' : '완료'}
            </Text>
          </Pressable>
        </View>

        <View className="mt-[8px] flex flex-col">
          <Pressable
            onPressIn={() => moveLoc('assign')}
            className="bg-[#F2F4F7] flex flex-row items-center rounded-[16px] mb-[12px] h-[64px]">
            <Image className="m-[12px]" source={assignButton} />
            <Text className="color-[#98A2B3] text-[16px] font-medium">
              키워드 추가하기
            </Text>
          </Pressable>

          <ScrollView className="flex flex-col ">
            {keywords.map(item => (
              <View
                className="flex-row items-center justify-center"
                key={item.id}>
                {!editActive ? null : (
                  <Pressable
                    onPressIn={() => removeKeyword(item.id)}
                    className="ml-[15px] mr-[15px]">
                    <Image source={DeleteIcon}></Image>
                  </Pressable>
                )}
                <Keyword type={item.type} keywordText={item.keywordText} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}
