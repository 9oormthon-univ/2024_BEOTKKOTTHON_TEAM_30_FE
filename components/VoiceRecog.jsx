import {useContext, useEffect, useState} from 'react';
import Voice from '@react-native-voice/voice';
import {Button, Text, View} from 'react-native';
import {KeywordsContext} from '../contexts/keywords';

export default function VoicRecog() {
  const [recognized, setRecognized] = useState('');
  const [started, setStarted] = useState('');
  const {keywords} = useContext(KeywordsContext);
  

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = e => {
    setStarted('√');
  };

  const onSpeechRecognized = e => {
    setRecognized('√');
  };

  const onSpeechResults = e => {
    let longString = e.value[0];
    let wordsArray = longString.split(' ');
    let lastWord = wordsArray[wordsArray.length - 1];
    console.log(lastWord);
    console.log(keywords);
  };

  async function _startRecognition() {
    try {
      await Voice.start('kor');
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    _startRecognition();
  }, [_startRecognition]);

  return (
    <View>{/* <Button onPress={_startRecognition} title="Start" /> */}</View>
  );
}
