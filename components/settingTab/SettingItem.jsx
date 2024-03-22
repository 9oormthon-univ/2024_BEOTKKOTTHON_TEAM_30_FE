import {Text, View, Switch, ScrollView} from 'react-native';
import ToggleContainer from '../defaults/ToggleContainer';

export default function SettingItem({p, title, what, setIsEnabled, isEnabled, children}) {
  return (
    <>
    
      <ScrollView className="bg-white">
        <View className="h-[48px] flex justify-end">
          <Text className="color-[#98A2B3] text-[16px] font-bold mx-[24px]">
            {title}
          </Text>
          {p && (
            <Text className="color-[#98A2B3] text-[12px] mt-[8px] mx-[24px]">
              {p}
            </Text>
          )}
        </View>

        <ToggleContainer
          what={what}
          setIsEnabled={setIsEnabled}
          isEnabled={isEnabled}
        />
        {children}
      </ScrollView>
      <View className="border-solid border-b-8 border-[#FAFAFA]"></View>
    </>
  );
}
