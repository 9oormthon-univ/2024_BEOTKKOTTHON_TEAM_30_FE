import {Image, Text, TextInput, View} from 'react-native';

import ProgressButton from './ProgressButton';

import {useContext, useState} from 'react';
import {KeywordsContext} from '../contexts/keywords';
import AssignHeader from './AssignHeader';
import Assigning from './Assigning';
import {UserLocContext} from '../contexts/userloc';

export default function AssignPage() {
  const [isNameOk, setIsNameOk] = useState(false);
  const [type, setType] = useState('가족');
  const [danger, setDanger] = useState('');
  const [keywordText, setKeywordText] = useState();
  const [isAssigned, setIsAssigned] = useState(false);
  const {addKeyword} = useContext(KeywordsContext);
  const {moveLoc} = useContext(UserLocContext);

  function assignHandler() {
    if (isAssigned) {
      moveLoc('add');
    } else {
      setIsAssigned(true);
      if (type === '긴급') {
        addKeyword({
          id: Math.random(),
          type: type,
          keywordText: keywordText,
          danger: danger,
        });
      } else {
        addKeyword({id: Math.random(), type: type, keywordText: keywordText});
      }
    }
  }

  return (
    <>
      <AssignHeader text="키워드 추가" />
      {isAssigned && (
        <View className="flex flex-1 justify-center items-center">
          <Text className="color-[#606BFF] text-[30px] font-bold">
            "{keywordText}"
          </Text>
          <Text className="color-[#667085] mt-[12px] text-[20px] font-medium">
            {type} 중 부르실 때 알려드릴게요!
          </Text>
        </View>
      )}
      {!isAssigned && (
        <Assigning
          setDanger={r => setDanger(r)}
          isNameOk={isNameOk}
          type={type}
          setIsNameOk={result => setIsNameOk(result)}
          setType={type => setType(type)}
          setKeywordText={text => setKeywordText(text)}
        />
      )}

      <ProgressButton
        text={isAssigned ? '좋아요' : '추가하기'}
        onPressIn={assignHandler}
        actiavted={isNameOk}
      />
    </>
  );
}
