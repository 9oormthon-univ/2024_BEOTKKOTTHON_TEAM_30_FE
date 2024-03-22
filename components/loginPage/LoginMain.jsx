import {Text, TextInput, View} from 'react-native';
import Dog from './Dog';
import ProgressButton from '../defaults/ProgressButton';
import {useContext, useState} from 'react';
import {UserLocContext} from '../../contexts/userloc';
import EmerSituation from './EmerSituation';
import EmerKeyword from './EmerKeyword';

export default function LoginMain({setName, isNameOk}) {
  const {moveLoc} = useContext(UserLocContext);
  const [loginLoc, setLoginloc] = useState('');

  function nameHandler(t) {
    setName(t);
  }
  function pressHandler() {
    if (isNameOk) {
      setLoginloc('dog');
      // moveLoc('greeting');
    }
  }

  return (
    <>
      {!loginLoc && (
        <>
          <View className="px-[24px] pt-[48px] flex items-start flex-1">
            <Text className="text-[30px] font-bold mb-[12px]">
              어떻게{'\n'}불러드릴까요?
            </Text>
            <Text
              className={`${
                isNameOk ? '{color-[#98A2B3]' : 'color-[#FF6060]'
              } text-[16px] font-medium`}>
              공백, 영문, 숫자, 특수기호 불가
            </Text>
            <TextInput
              onChangeText={nameHandler}
              className="color-[#182230] text-[20px] mt-[48px] py-[10px]"
              placeholder="이름을 알려주세요"></TextInput>
          </View>
          <ProgressButton
            onPressIn={pressHandler}
            actiavted={isNameOk}
            text="다음"
          />
        </>
      )}
      
      {loginLoc === 'dog' && <Dog setLoginloc={val => setLoginloc(val)} />}
      {loginLoc === 'emerSituation' && <EmerSituation  setLoginloc={val => setLoginloc(val)} />}
      {loginLoc === 'emerkeyword' && <EmerKeyword />}
    </>
  );
}
