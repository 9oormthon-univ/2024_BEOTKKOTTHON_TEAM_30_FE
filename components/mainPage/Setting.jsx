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
    emerSituationIsEnabled, 
    emerKeywordIsEnabled,
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
          isEnabled={emerSituationIsEnabled}
          setIsEnabled={() => changeSetting("emerSituationIsEnabled")}>
          <ToggleContainer
            what="차 경적 소리"
            isEnabled={emerKeywordIsEnabled}
            setIsEnabled={() => changeSetting("emerKeywordIsEnabled")}
          />
          <ToggleContainer
            what="조심해"
            isEnabled={emerKeywordIsEnabled}
            setIsEnabled={() => changeSetting("emerKeywordIsEnabled")}
          />
          <ToggleContainer
            what="위험해"
            isEnabled={emerKeywordIsEnabled}
            setIsEnabled={() => changeSetting("emerKeywordIsEnabled")}
          />
          <ToggleContainer
            what="대피하세요"
            isEnabled={emerKeywordIsEnabled}
            setIsEnabled={() => changeSetting("emerKeywordIsEnabled")}
          />
        </SettingItem>
      </View>
    </>
  );
}
