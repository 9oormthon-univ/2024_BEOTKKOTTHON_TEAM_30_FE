import {Text, TextInput, View} from 'react-native';

export default function LoginMain({setName, isNameOk}) {
  function nameHandler(t) {
    setName(t);
  }
  
  return (
    <View className="px-6 pt-12 flex items-start flex-1">
      <Text className=" text-2xl font-bold mb-2 ">
        어떻게{'\n'}불러드릴까요?
      </Text>
      <Text className={isNameOk ? '{color-[#98A2B3]' : 'color-[#FF6060]'}>공백, 영문, 숫자, 특수기호 불가</Text>
      <TextInput
        onChangeText={nameHandler}
        className="color-[#98A2B3] text-2xl mt-10 py-[10px]"
        placeholder="이름을 입력해주세요"></TextInput>
    </View>
  );
}
