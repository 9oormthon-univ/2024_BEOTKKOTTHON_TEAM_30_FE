import {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function RecordingSound() {
    
  const [recording, setRecording] = useState(false);

  const [recordDuration, setRecordDuration] = useState({
    recordSecs: 0,
    recordTime: '00:00:00',
  });
  const [playerDuration, setPlayerDuration] = useState({
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: '00:00:00',
    duration: '00:00:00',
  });

  // 녹음 시작
  
  
  const handleStartRecord = async () => {
    if (audioRecorderPlayer) {
      setRecording(true);
      setPlayerDuration({
        ...playerDuration,
        currentPositionSec: 0,
        currentDurationSec: 0,
        playTime: '00:00:00',
        duration: '00:00:00',
      });
      await audioRecorderPlayer.startRecorder();
    }
    
    const path = RNFS.DocumentDirectoryPath + '/test.wav';
    audioRecorderPlayer.addRecordBackListener(e => {
      setRecordDuration({
        ...recordDuration,
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
    });
  };

  // 녹음 중지
  const handleStopRecord = async () => {
    if (audioRecorderPlayer) {
      setRecording(false);
      await audioRecorderPlayer.stopRecorder();
    }
    audioRecorderPlayer.removeRecordBackListener();
    setRecordDuration({...recordDuration, recordSecs: 0});
  };

  // 음성 재생
  const soundStart = async () => {
    await audioRecorderPlayer.startPlayer();
    audioRecorderPlayer.addPlayBackListener(e => {
      setPlayerDuration({
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  };
  audioRecorderPlayer.s



  return (
    <View className="flex w-full h-full justify-center items-center gap-6">
      <Pressable onPressIn={handleStartRecord}>
        <Text>start</Text>
      </Pressable>
      <Pressable onPressIn={handleStopRecord}>
        <Text>stop</Text>
      </Pressable>
      <Pressable onPressIn={soundStart}>
        <Text>hear</Text>
      </Pressable>
    </View>
  );
}
