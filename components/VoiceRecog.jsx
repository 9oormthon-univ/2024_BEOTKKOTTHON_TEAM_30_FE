import React, {useContext, useEffect, useState} from 'react';
import Voice from '@react-native-voice/voice';
import {Button, Text, View} from 'react-native';
import {checkCalled} from '../functions/checkCalled';
import {KeywordsContext} from '../contexts/keywords';

export default function VoicRecog() {
  const [isRecord, setIsRecord] = useState(false);
  const [text, setText] = useState('');
  const {keywords} = useContext(KeywordsContext);
  const buttonLabel = isRecord ? 'Stop' : 'Start';
  const voiceLabel = text
    ? text
    : isRecord
    ? 'Say something...'
    : 'press Start button';

  const _onSpeechStart = () => {
    console.log('onSpeechStart');
    setText('');
  };
  const _onSpeechEnd = () => {
    console.log('onSpeechEnd');
  };
  const _onSpeechVolumeChanged = () => {};
  const _onSpeechResults = event => {
    const result = checkCalled(event.value[0], keywords);
    console.log(result);
    console.log(keywords);
    setText(event.value[0]);
  };
  const _onSpeechError = event => {
    console.log('_onSpeechError');
    console.log(event.error);
  };

  const _startRecognition = async () => {
    try {
      await Voice.start('kor');
      setIsRecord(true);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    Voice.onSpeechStart = _onSpeechStart;
    Voice.onSpeechEnd = _onSpeechEnd;
    Voice.onSpeechResults = _onSpeechResults;
    Voice.onSpeechError = _onSpeechError;
    Voice.onSpeechVolumeChanged = _onSpeechVolumeChanged;
    // Voice.onSpeechPartialResults = _onSpeechPartialResults;

    _startRecognition();

    return () => {
      console.log('hi');
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [keywords]);

  return (
    <View>
      <Text>{voiceLabel}</Text>
      {/* <Button onPress={_onRecordVoice} title={buttonLabel} /> */}
    </View>
  );
}
