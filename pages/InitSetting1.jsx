import Header from '../components/defaults/Header';
import ProgressButton from '../components/defaults/ProgressButton';
import {Text, View} from 'react-native';

export default function InitSetting1() {
 
  return (
    <>
      <Header 
        back={'login'} 
      />
        <View className="px-[24px] pt-[48px] flex items-start flex-1">
        <Text className="text-[30px] font-bold mb-[12px]">
            강아지를{'\n'}무서워하시나요?
        </Text>
        <Text className="color-[#98A2B3] text-[16px] font-medium">
            짖는 소리가 들리면 알려드릴게요!
        </Text>
    </View>
    <View className="flex-row">
        <ProgressButton
            text="괜찮아요"
        />
        <ProgressButton 
            actiavted={true}
            text="네,알려주세요"
        />
    </View>
      
    </>
  );
}

