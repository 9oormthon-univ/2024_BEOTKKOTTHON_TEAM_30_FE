import {Text, TextInput, View} from 'react-native';
import nameValidator from '../../functions/nameValidator';

import workIcon from '../../assets/twinkles/work-a.png';
import familyIcon from '../../assets/twinkles/family-a.png';
import friendIcon from '../../assets/twinkles/friend-a.png';
import emergencyIcon from '../../assets/twinkles/red-a.png';
import loverIcon from '../../assets/twinkles/lover-a.png';
import josimIcon from '../../assets/twinkles/josim-a.png';
import dangerIcon from '../../assets/twinkles/danger-a.png';
import fleeIcon from '../../assets/twinkles/flee-a.png';
import AssignTypeItem from './AssignTypeItem';

const AssignTypes = [
  {id: 0, text: '가족', icon: familyIcon},
  {id: 1, text: '직장', icon: workIcon},
  {id: 3, text: '친구', icon: friendIcon},
  {id: 4, text: '연인', icon: loverIcon},
  {id: 5, text: '긴급', icon: emergencyIcon},
];

const EmergencyRanges = [
  {id: 10, text: '조심', icon: josimIcon},
  {id: 11, text: '위험', icon: dangerIcon},
  {id: 12, text: '대피', icon: fleeIcon},
];

export default function Assigning({
  type,
  isNameOk,
  setIsNameOk,
  setKeywordText,
  setType,
  setDanger,
  danger
}) {
  function keywordHandler(keyword) {
    const validationResult = nameValidator(keyword);
    setIsNameOk(validationResult);
    if (validationResult) {
      setKeywordText(keyword);
    }
  }

  return (
    <View className="px-[24px] pt-[48px] flex items-start flex-1">
      <Text className="text-[20px] font-bold mb-[8px]">어떻게 부르나요?</Text>
      <Text
        className={`${
          isNameOk ? '{color-[#98A2B3]' : 'color-[#FF6060]'
        } text-[12px]`}>
        공백, 영문, 숫자, 특수기호 불가
      </Text>
      <TextInput
        onChangeText={keywordHandler}
        className="color-[#98A2B3] mt-[24px] text-[20px] color-[#182230]"
        placeholder="자주 불리는 키워드를 적어주세요."
      />

      <Text className=" text-[20px] font-bold mt-[64px] mb-[8px]">
        누가 혹은 어디에서 부르나요?
      </Text>
      <Text className="text-[12px] color-[#98A2B3] mb-[32px]">
        긴급 상황은 조심, 위험, 대피 3단계로 설정가능해요!
      </Text>
      <View className="flex flex-row justify-between px-[8px] w-full">
        {AssignTypes.map(item => (
          <AssignTypeItem
            onPressIn={type => setType(type)}
            key={item.id}
            text={item.text}
            icon={item.icon}
            activated={type}
            _className={type === item.text ? '' : 'opacity-40'}
          />
        ))}
      </View>

      {type === '긴급' && (
        <>
          <Text className=" text-[20px] mt-[64px] font-bold mb-[16px]">
            위험도를 선택해주세요!
          </Text>
          <Text className="text-[12px] color-[#98A2B3] mb-[32px]">
            긴급 상황은 조심, 위험, 대피 3단계로 설정가능해요!
          </Text>
          <View className="flex flex-row justify-between px-[8px]  w-1/2">
            {EmergencyRanges.map(item => (
              <AssignTypeItem
                onPressIn={() => setDanger(item.text)}
                key={item.id}
                text={item.text}
                icon={item.icon}
                activated={type}
                _className={danger === item.text ? '' : 'opacity-40'}
              />
            ))}
          </View>
        </>
      )}
    </View>
  );
}
