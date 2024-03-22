import {useContext, useState} from 'react';
import {Switch, Text, View} from 'react-native';
import SettingItem from '../settingTab/SettingItem';
import ToggleContainer from '../defaults/ToggleContainer';
import {SettingsContext} from '../../contexts/settings';

export default function Setting() {
  const {settings, changeSetting} = useContext(SettingsContext);
  const {
    alertIsEnabled,
    hapticIsEnabled,
    dogIsEnabled,
    carIsEnabled, 
    sirenIsEnabled, 
    josimIsEnabled, 
    dangerIsEnabled, 
    fleeIsEnabled, 
  } = settings;

  return (
    <>
      <View className="bg-[#FAFAFA] flex-1 mt-[24px]">
        <SettingItem
          title="어플"
          what="알림"
          isEnabled={alertIsEnabled}
          setIsEnabled={() => changeSetting("alertIsEnabled")}
        />
        <SettingItem
          title="진동"
          what="진동알림"
          isEnabled={hapticIsEnabled}
          setIsEnabled={() => changeSetting("hapticIsEnabled")}
        />
        <SettingItem
          title="긴급"
          p="자동으로 긴급상황을 알려드릴게요!"
          what="강아지 소리"
          isEnabled={dogIsEnabled}
          setIsEnabled={() => changeSetting("dogIsEnabled")}>
          <ToggleContainer
            what="차 경적 소리"
            isEnabled={carIsEnabled}
            setIsEnabled={() => changeSetting("carIsEnabled")}
          />
          <ToggleContainer
            what="사이렌 소리"
            isEnabled={sirenIsEnabled}
            setIsEnabled={() => changeSetting("sirenIsEnabled")}
          />
          <ToggleContainer
            what="조심해"
            isEnabled={josimIsEnabled}
            setIsEnabled={() => changeSetting("josimIsEnabled")}
          />
          <ToggleContainer
            what="위험해"
            isEnabled={dangerIsEnabled}
            setIsEnabled={() => changeSetting("dangerIsEnabled")}
          />
          <ToggleContainer
            what="대피하세요"
            isEnabled={fleeIsEnabled}
            setIsEnabled={() => changeSetting("fleeIsEnabled")}
          />
        </SettingItem>
      </View>
    </>
  );
}
