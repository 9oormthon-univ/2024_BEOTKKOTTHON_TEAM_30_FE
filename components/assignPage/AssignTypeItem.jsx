import {Image, View, Text, Pressable} from 'react-native';

export default function AssignTypeItem({onPressIn, activated, icon, text}) {
  return (
    <Pressable
      onPressIn={() => onPressIn(text)}
      className="flex flex-col justify-center items-center gap-[8px]">
      <Image source={icon} />
      <Text
        className={activated === text ? 'color-[#182230]' : 'color-[#98A2B3]'}>
        {text}
      </Text>
    </Pressable>
  );
}
