import {Text, TextInput, View} from 'react-native';
import AssignTypeItem from './AssignTypeItem';
import nameValidator from '../functions/nameValidator';

import loverIcon from '../assets/twinkleLover.png';
import friendIcon from '../assets/twinkleFriend.png';
import workIcon from '../assets/twinkleWork.png';
import familyIcon from '../assets/twinkleFamily.png';
import dailyIcon from '../assets/twinkleDaily.png';


const AssignTypes = [
  {id: 0, text: '가족', icon: familyIcon},
  {id: 1, text: '직장', icon: workIcon},
  {id: 2, text: '일상', icon: dailyIcon},
  {id: 3, text: '친구', icon: friendIcon},
  {id: 4, text: '연인', icon: loverIcon},
];

export default function Assigning({type, isNameOk, setIsNameOk, setKeywordText, setType}) {
  

  function keywordHandler(keyword) {
    const validationResult = nameValidator(keyword);
    setIsNameOk(validationResult);
    if (validationResult) {
      setKeywordText(keyword);
    }
  }
  return (
    <View className="px-6 pt-12 flex items-start flex-1">
      <Text className=" text-xl font-bold mb-2 ">어떻게 부르나요?</Text>
      <Text className={isNameOk ? '{color-[#98A2B3]' : 'color-[#FF6060]'}>
        공백, 영문, 숫자, 특수기호 불가
      </Text>
      <TextInput
        onChangeText={keywordHandler}
        className="color-[#98A2B3] mt-6 text-xl"
        placeholder="자주 불리는 키워드를 적어주세요."
      />

      <Text className=" text-xl font-bold mt-12 mb-4">
        누가 혹은 어디에서 부르나요?
      </Text>
      <View className="flex flex-row justify-between px-2 w-full">
        {AssignTypes.map(item => (
          <AssignTypeItem
            onPressIn={type => setType(type)}
            key={item.id}
            text={item.text}
            icon={item.icon}
            activated={type}
          />
        ))}
      </View>
    </View>
  );
}
