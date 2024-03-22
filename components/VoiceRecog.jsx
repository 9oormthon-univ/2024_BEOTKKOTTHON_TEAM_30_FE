import React, {useCallback, useContext, useEffect, useState} from 'react';
import Voice from '@react-native-voice/voice';
import {Button, Text, View} from 'react-native';
import {checkCalled} from '../functions/checkCalled';
import {KeywordsContext} from '../contexts/keywords';

export default function VoicRecog() {
  const {keywords, nowCalled, call} = useContext(KeywordsContext);

  useEffect(() => {
    Voice.onSpeechStart = _onSpeechStart;
    Voice.onSpeechRecognized = _onSpeechRecognized;
    Voice.onSpeechEnd = _onSpeechEnd;
    Voice.onSpeechError = _onSpeechError;
    Voice.onSpeechResults = _onSpeechResults;
    Voice.onSpeechPartialResults = _onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = _onSpeechVolumeChanged;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, [keywords]);

  useEffect(() => {
    const timer = setInterval(() => {
      Voice.start('kor');
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  function _onSpeechStart(e) {
    console.log('started');
  }
  function _onSpeechEnd(e) {
    console.log('end');
  }
  function _onSpeechError(e) {}
  function _onSpeechRecognized(e) {}
  function _onSpeechResults(e) {
    const result = checkCalled(keywords, e.value);
    if (result) {
      call(result);
    }
  }

  function _onSpeechPartialResults(e) {}
  function _onSpeechVolumeChanged(e) {}

  return;
}
