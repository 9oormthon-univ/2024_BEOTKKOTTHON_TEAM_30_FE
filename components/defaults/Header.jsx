import {Image, Pressable, Text, View} from 'react-native';
import leftArrow from '../../assets/buttons/back.png';
import {useContext} from 'react';
import {UserLocContext} from '../../contexts/userloc';
import logoImage from '../../assets/logos/logo.png';

export default function Header({back, text}) {
  const {moveLoc} = useContext(UserLocContext);
  return (
    <View className="flex flex-row mx-[16px] mt-[44px] justify-between items-end">
      {back && (
        <Pressable
          onPressIn={() => {
            moveLoc(back);
          }}>
          <Image source={leftArrow} />
        </Pressable>
      )}
      {!back && <Image />}

      {text && <Text className="pt-3 text-[16px] font-bold">{text}</Text>}
      {!text && <Image className="my-[12px]" source={logoImage} />}

      <Image />
    </View>
  );
}
