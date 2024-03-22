import {Image, Pressable, Text, View} from 'react-native';
import leftArrow from '../../assets/buttons/back.png';
import {useContext} from 'react';
import {UserLocContext} from '../../contexts/userloc';
import logoImage from '../../assets/logos/logo.png';


export default function Header({back, text, forward}) {
  const {moveLoc} = useContext(UserLocContext);
  return (
    <View className="flex flex-row mt-[44px] justify-between items-center mx-[24px]">
      {back && (
        <Pressable
          className="w-[24px]"
          onPressIn={() => {
            console.log(back);
            moveLoc(back);
          }}>
          <Image source={leftArrow} />
        </Pressable>
      )}
      {!back && <Image className="w-[24px]" />}

      {text && <Text className="pt-3 text-[16px] font-bold">{text}</Text>}
      {!text && <Image className="my-[12px]" source={logoImage} />}
      <Pressable onPressIn={()=>moveLoc('introduce')} className="w-[24px]">
        <Image source={forward} />
      </Pressable>
    </View>
  );
}
