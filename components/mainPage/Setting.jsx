import {useState} from 'react';
import {Switch, Text, View} from 'react-native';
import SettingItem from '../settingTab/SettingItem';

export default function Setting() {
  const [alertIsEnabled, setAlertIsEnabled] = useState(true);
  const [hapticIsEnabled, setHapticIsEnabled] = useState(true);
  const [emergencyIsEnabled, setEmergencyIsEnabled] = useState(true);

  return (
    <>
      <View className="bg-[#FAFAFA] flex-1 mt-[24px]">
        <SettingItem
          title="어플"
          what="알림"
          isEnabled={alertIsEnabled}
          setIsEnabled={setAlertIsEnabled}
        />
        <SettingItem
          title="진동"
          what="진동알림"
          isEnabled={hapticIsEnabled}
          setIsEnabled={setHapticIsEnabled}
        />
        <SettingItem
          title="긴급"
          p="자동으로 긴급상황을 알려드릴게요!"
          what="긴급키워드 자동 설정"
          isEnabled={emergencyIsEnabled}
          setIsEnabled={setEmergencyIsEnabled}
        />
      </View>
    </>
  );
}
