import {Pressable, Text, View} from 'react-native';

export default function ProgressButton({isNameOk, onPressIn}) {
  return (
    <View className="py-[10px] px-6 mb-9">
      <Pressable onPressIn={onPressIn} className={`${isNameOk ? 'bg-[#606BFF]' : 'bg-[#D0D5DD]'} px-3 py-4 rounded-[8px] flex items-center`}>
        <Text className={`${isNameOk? 'color-[#FFFFFF]' : 'color-[#98A2B3]'} text-base`}>다음</Text>
      </Pressable>
    </View>
  );
}
