import Header from '../components/defaults/Header';
import ProgressButton from '../components/defaults/ProgressButton';
import {Text, View} from 'react-native';
import ToggleContainer from '../components/defaults/ToggleContainer';

export default function InitSetting2() {

  function pressHandler() {
        
  }

  return (
    <>
      <Header />
      <View className="flex-1">

        <View className="px-[24px] pt-[48px] flex items-start">
        <Text className="text-[30px] font-bold mb-[12px]">
            긴급 키워드 감지 시{'\n'}알려드릴까요?
        </Text>
        <Text className="color-[#98A2B3] text-[16px] font-medium leading-[25px]">
            일상 생활 중 키워드를 인식해{'\n'}위험상황을 알려드릴게요!
        </Text>
        </View>
        <ToggleContainer 
            what="조심해"
        />
        <ToggleContainer 
            what="위험해"
        />
        <ToggleContainer  
            what="대피하세요"
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

