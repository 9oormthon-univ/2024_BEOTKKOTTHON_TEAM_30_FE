import Header from '../components/defaults/Header';
import ProgressButton from '../components/defaults/ProgressButton';
import {Text, View} from 'react-native';
import ToggleContainer from '../components/defaults/ToggleContainer';

export default function InitSetting2() {

    function pressHandler() {
        
      }

  return (
    <>
      <Header 
        back={'init1'} 
      />
      <View className="flex-1">

        <View className="px-[24px] pt-[48px] flex items-start">
        <Text className="text-[30px] font-bold mb-[12px]">
            위험한 소리가{'\n'}들리면 알려드릴까요?
        </Text>
        <Text className="color-[#98A2B3] text-[16px] font-medium leading-[25px]">
            빵빵, 위잉 등 위험한 소리가 들리면{'\n'}알려드릴게요!
        </Text>
        </View>
        <ToggleContainer 
            what="차경적 소리"
        />
        <ToggleContainer
            what="사이렌 소리"
        />
       
    </View>
    <ProgressButton
        onPressIn={pressHandler}
        actiavted={true}
        text="다음"
    />
      
    </>
  );
}

