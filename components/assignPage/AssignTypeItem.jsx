import {Image, View, Text, Pressable} from 'react-native';

export default function AssignTypeItem({_className, onPressIn, activated, icon, text}) {
  
  return (

    <Pressable
      onPressIn={() => onPressIn(text)}
      className="flex flex-col justify-center items-center gap-[8px]">
      <Image className={`w-[32px] h-[32px] ${_className}`} source={icon} />
      <Text
        className={activated === text ? 'color-[#182230]' : 'color-[#98A2B3]'}>
        {text}
      </Text>
    </Pressable>
  );
}
