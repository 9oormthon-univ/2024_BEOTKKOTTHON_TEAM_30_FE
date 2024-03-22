// import ProgressButton from '../components/defaults/ProgressButton';
import {Text, View} from 'react-native';
import Header from '../defaults/Header';
import ProgressButton from '../defaults/ProgressButton';
import { useContext } from 'react';
import { SettingsContext } from '../../contexts/settings';

export default function Dog({setLoginloc}) {
    const {changeSetting} = useContext(SettingsContext); 
    function settingHandler(value){
        if (!value){
            changeSetting('dogIsEnabled'); 
        }
        setLoginloc('emerSituation'); 
    }
  return (
    <>
      <View className="px-[24px] pt-[48px] flex items-start flex-1">
        <Text className="text-[30px] font-bold mb-[12px]">
          강아지를{'\n'}무서워하시나요?
        </Text>
        <Text className="color-[#98A2B3] text-[16px] font-medium">
          짖는 소리가 들리면 알려드릴게요!
        </Text>
      </View>
      <View className="flex flex-row justify-between">
        <ProgressButton text="괜찮아요" isHalf={true} onPressIn={()=>settingHandler(false)} />
        <ProgressButton actiavted={true} text="네,알려주세요" isHalf={true} onPressIn={()=>settingHandler(true)} />
      </View>
    </>
  );
}
