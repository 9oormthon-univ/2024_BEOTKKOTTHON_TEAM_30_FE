import {Text, View, Switch} from 'react-native';

export default function SettingItem({p, title, what, setIsEnabled, isEnabled}) {
  return (
    <>
      <View className="bg-white ">
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
        <View className="flex flex-row justify-between items-center  h-[66.56px] mx-[24px] my-[16px]">
          <Text className="color-[#182230] text-[16px] font-bold">{what}</Text>

          <Switch
            trackColor={{false: '#767577', true: '#606BFF'}}
            onValueChange={() => {
              setIsEnabled(prev => !prev);
            }}
            value={isEnabled}
          />
        </View>
      </View>
      <View className="border-solid border-b-8 border-[#FAFAFA]"></View>
    </>
  );
}
