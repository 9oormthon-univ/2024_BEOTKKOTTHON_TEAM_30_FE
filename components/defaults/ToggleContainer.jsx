import {View, Text, Switch} from 'react-native';

export default function ToggleContainer({isEnabled, setIsEnabled, what}) {
  return (
    <View className="flex flex-row justify-between items-center   mx-[24px] my-[24px]">
      <Text className="color-[#182230] text-[16px] font-bold">{what}</Text>

      <Switch
        trackColor={{false: '#767577', true: '#606BFF'}}
        onValueChange={() => {
          setIsEnabled(prev => !prev);
        }}
        value={isEnabled}
        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
      />
    </View>
  );
}
