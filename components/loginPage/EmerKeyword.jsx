import {Settings, Text, View} from 'react-native';
import ProgressButton from '../defaults/ProgressButton';
import ToggleContainer from '../defaults/ToggleContainer';
import {useContext} from 'react';
import {SettingsContext} from '../../contexts/settings';
import {UserLocContext} from '../../contexts/userloc';

export default function EmerSituation() {
  const {settings, changeSetting} = useContext(SettingsContext);
  const {moveLoc} = useContext(UserLocContext);
  const {
    josimIsEnabled, 
    dangerIsEnabled, 
    fleeIsEnabled, 
  } = settings;
  return (
    <>
      <View className="flex-1">
        <View className="px-[24px] pt-[48px] flex items-start">
          <Text className="text-[30px] font-bold mb-[12px]">
            긴급 키워드 감지 시{'\n'}알려드릴까요?
          </Text>
          <Text className="color-[#98A2B3] text-[16px] font-medium leading-[25px]">
            일상생활 중 키워드를 인식해{'\n'}위험상황을 알려드릴게요! 
          </Text>
        </View>
        <ToggleContainer isEnabled={josimIsEnabled} setIsEnabled={()=>changeSetting('josimIsEnabled')} what="조심해" />
        <ToggleContainer isEnabled={dangerIsEnabled} setIsEnabled={()=>changeSetting('dangerIsEnabled')} what="위험해" />
        <ToggleContainer isEnabled={fleeIsEnabled} setIsEnabled={()=>changeSetting('fleeIsEnabled')} what="대피하세요" />
      </View>
      <ProgressButton
        onPressIn={() => {
          moveLoc('greeting');
        }}
        actiavted={true}
        text="다음"
      />
    </>
  );
}
