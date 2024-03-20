import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import CalledKeywordItem from '../addTab/CalledKeywordItem';


import workIcon from '../../assets/twinkles/work-a.png';
import familyIcon from '../../assets/twinkles/family-a.png';
import friendIcon from '../../assets/twinkles/friend-a.png';
import emergencyIcon from '../../assets/twinkles/red-a.png';
import loverIcon from '../../assets/twinkles/lover-a.png';
import DeleteIcon from '../../assets/buttons/delete.png'

import assignButton from '../../assets/buttons/add.png';
import {useContext,useState} from 'react';
import {UserLocContext} from '../../contexts/userloc';
import {KeywordsContext} from '../../contexts/keywords';
import Keyword from '../addTab/Keyword';

const CalledKeywords = [
  {id: 0, icon: familyIcon},
  {id: 1, icon: workIcon},
  {id: 2, icon: friendIcon},
  {id: 3, icon: loverIcon},
  {id: 4, icon: emergencyIcon},
];

export default function Add() {
  const {moveLoc} = useContext(UserLocContext);
  const {keywords} = useContext(KeywordsContext);

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
          {/* 백에서 정보 받아오기.. */}
          {CalledKeywords.map(item => (
            <CalledKeywordItem key={item.id} icon={item.icon} cnt={0} />
          ))}
        </View>
        <View className="mt-[48px] flex flex-row justify-between items-end mb-[8px]">
          <Text className="text-[16px] font-bold color-[#475467]">
            내 키워드
          </Text>
          <Pressable onPress={editBtnHandler} >
           <Text className="color-[#606BFF]">
            { !editActive ? '편집' : '완료' }
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
           
           {/*임의로 두 개 생성해놓았습니다! */}
            {<View className="flex-row  items-center">
              { !editActive ? null : <Pressable className="ml-[15px] mr-[15px]"><Image source={DeleteIcon}></Image></Pressable> }
                <Keyword className="flex-1" key={1} type={'가족'} keywordText={'구름아'}/>
              </View>}
              {<View className="flex-row  items-center">
              { !editActive ? null : <Pressable className="ml-[15px] mr-[15px]"><Image source={DeleteIcon}></Image></Pressable> }
                <Keyword className="flex-1" key={1} type={'가족'} keywordText={'구름아'}/>
              </View>}
              
            {keywords.map(item => (
               <View className="flex-row  items-center">
               { !editActive ? null : <Pressable className="ml-[15px] mr-[15px]"><Image source={DeleteIcon}></Image></Pressable> }
                  <Keyword
                    key={item.id}
                    type={item.type}
                    keywordText={item.keywordText}
                  />
               </View>
              
            ))}
          </ScrollView>
        </View>
      </View>
    </>
  );
}
