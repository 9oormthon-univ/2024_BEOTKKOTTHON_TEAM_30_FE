import {Image, Text, View} from 'react-native';


export default function CalledKeywordItem({icon, cnt}) {
  return (
    <View className="flex flex-row gap-2 items-center">
      <Image source={icon} />
      <Text className="text-[20px] font-medium color-[#98A2B3]">{cnt}</Text>
    </View>
  );
}
