import {Pressable, Text, View} from 'react-native';

export default function ProgressButton({actiavted, onPressIn, text, isHalf}) {
  return (
    <View className={`py-[10px] px-[24px] mb-[36px] ${isHalf ? 'w-1/2' : 'w-full'}`}>
      <Pressable onPressIn={onPressIn} className={`${actiavted ? 'bg-[#606BFF]' : 'bg-[#D0D5DD]'} px-3 py-4 rounded-[8px] flex items-center`}>
        <Text className={`${actiavted? 'color-[#FFFFFF]' : 'color-[#98A2B3]'} text-base`}>{text}</Text>
      </Pressable>
    </View>
  );
}
