import {useEffect, useState} from 'react';
import Voice from '@react-native-voice/voice';
import { Button, Text, View } from 'react-native';


export default function VoicRecog() {
  const [recognized, setRecognized] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);

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
    setResults(e.value);
  };

  async function _startRecognition(){
    try{
        await Voice.start('kor'); 
    }catch(e){
        console.error(e);
    }
  }

  return (
    <View>
      <Text>Transcript</Text>
      {results.map((result, index) => (
        <Text key={index}>{result}</Text>
      ))}
      <Button onPress={_startRecognition} title="Start" />
    </View>
  );
}
