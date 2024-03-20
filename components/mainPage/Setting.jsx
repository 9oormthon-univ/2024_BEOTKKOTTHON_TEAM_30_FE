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
          what="긴급상황 자동 알림"
          isEnabled={emerSituationIsEnabled}
          setIsEnabled={() => changeSetting("emerSituationIsEnabled")}>
          <ToggleContainer
            what="긴급 키워드 자동 알림"
            isEnabled={emerKeywordIsEnabled}
            setIsEnabled={() => changeSetting("emerKeywordIsEnabled")}
          />
        </SettingItem>
      </View>
    </>
  );
}
