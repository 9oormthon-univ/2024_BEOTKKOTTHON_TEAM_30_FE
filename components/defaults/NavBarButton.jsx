import {Image, Pressable, Text} from 'react-native';

export default function NavBarButton({title, icon, name, onPressIn, tab}) {
  return (
    <Pressable
      onPressIn={() => onPressIn(name)}
      className="flex flex-col justify-center items-center gap-[4px]">
      <Image source={icon} />
      <Text className={`${tab === name ?'color-[#606BFF]' : 'color-[#344054]'} font-medium text-[10px]`}>{title}</Text>
    </Pressable>
  );
}
