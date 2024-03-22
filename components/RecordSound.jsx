import {Button, Pressable, Text, View} from 'react-native';
import {Audio} from 'expo-av';
import {useEffect, useState} from 'react';
import {
  AndroidAudioEncoder,
  AndroidOutputFormat,
  IOSAudioQuality,
  IOSOutputFormat,
  Recording,
} from 'expo-av/build/Audio';
import * as FileSystem from 'expo-file-system';

export default function () {
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (recording) {
        stopRecording();
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [recording]);

  useEffect(() => {
    setTimeout(()=>{}, 3000);
    startRecording();
  }, []);

  async function startRecording() {
    try {
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const {recording} = await Audio.Recording.createAsync({
        isMeteringEnabled: true,
        android: {
          ...Audio.RecordingOptionsPresets.HIGH_QUALITY.android,
          extension: '.wav',
          outputFormat: AndroidOutputFormat.DEFAULT,
          audioEncoder: AndroidAudioEncoder.DEFAULT,
        },
        ios: {
          ...Audio.RecordingOptionsPresets.HIGH_QUALITY.ios,
          extension: '.wav',
          outputFormat: IOSOutputFormat.LINEARPCM,
        },
        web: {
          mimeType: 'audio/wav',
          bitsPerSecond: 128000,
        },
      });
      setRecording(recording);
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }
  async function sendWavFileToServer(uri) {
    try {
      const fileInfo = await FileSystem.getInfoAsync(uri);
      const fileUri = fileInfo.uri;
      const formData = new FormData();
      formData.append('audioFile', {
        uri: fileUri,
        name: 'recording.wav',
        type: 'audio/wav',
      });

      const response = await fetch('SERVER_URL', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to upload WAV file to server');
      }

      console.log('WAV file uploaded successfully');
    } catch (error) {
      console.error('Error sending WAV file to server:', error);
    }
  }


  async function stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    console.log('Recording stopped and stored at', uri);
    startRecording();
    sendWavFileToServer(uri);
    
  }


  return (
    <View className="flex justify-center items-center flex-1">
      <Pressable onPressIn={() => startRecording()}>
        <Text>start</Text>
      </Pressable>
    </View>
  );
}
