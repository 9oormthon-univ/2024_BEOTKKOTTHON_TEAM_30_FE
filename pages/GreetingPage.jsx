import {Image, Pressable, Text, View} from 'react-native';
import bg from '../assets/backgrounds/logined.png';
import {useContext} from 'react';
import {UserLocContext} from '../contexts/userloc';
import Header from '../components/defaults/Header';

export default function GreetingPage() {
  const {userName, moveLoc} = useContext(UserLocContext);

  return (
    <>
      <Header />
      <Image className="w-full h-full absolute" source={bg} />
      <Pressable
        onPressIn={() => {
          moveLoc('home');
        }}
        className="flex flex-1 justify-center items-center">
        <Text className="color-[#182230] font-bold text-[32px]">
          {userName}님
        </Text>
        <Text className="color-[#182230] font-bold text-[32px] mb-[24px]">
          반가워요!
        </Text>
        <Text className="text-[20px] font-medium color-[#667085]">
          당신 곁의 소리를 들어드릴게요!
        </Text>
      </Pressable>
    </>
  );
}
