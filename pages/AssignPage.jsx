import {Image, Text, View} from 'react-native';

import ProgressButton from '../components/defaults/ProgressButton';

import {useContext, useState} from 'react';
import {KeywordsContext} from '../contexts/keywords';
import Header from '../components/defaults/Header';
import Assigning from '../components/assignPage/Assigning';
import {UserLocContext} from '../contexts/userloc';

import {AssignsExplanation} from '../UXwritings/writings';

export default function AssignPage() {
  const [isNameOk, setIsNameOk] = useState(false);
  const [type, setType] = useState('가족');
  const [danger, setDanger] = useState('조심');
  const [keywordText, setKeywordText] = useState();
  const [isAssigned, setIsAssigned] = useState(false);
  const {addKeyword} = useContext(KeywordsContext);
  const {moveLoc} = useContext(UserLocContext);

  const expl =
    AssignsExplanation[AssignsExplanation.findIndex(item => item.type === type)]
      .expl;
  const icon =
    AssignsExplanation[AssignsExplanation.findIndex(item => item.type === type)]
      .icon;

  const bg =
    AssignsExplanation[AssignsExplanation.findIndex(item => item.type === type)]
      .bg;

  function assignHandler() {
    if (isAssigned) {
      moveLoc('add');
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
    } else {
      setIsAssigned(true);
    }
  }

  return (
    <>
      <Header back="add" text="키워드 추가" />
      {isAssigned && (
        <>
          <Image source={bg} className="absolute top-[320px] left-[40px]" />
          <View className="flex flex-1 justify-center items-center relative">
            <Image
              source={icon}
              className="w-[48px] h-[48px] absolute top-[320px]"
            />
            <Text className="color-[#606BFF] text-[30px] font-bold absolute top-[380px]">
              "{keywordText}"
            </Text>
            <Text className="color-[#667085] mt-[12px] text-[20px] font-medium absolute top-[420px]">
              {expl}
            </Text>
          </View>
        </>
      )}
      {!isAssigned && (
        <Assigning
          danger={danger}
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
