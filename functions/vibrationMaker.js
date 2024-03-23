/*
진동 생성 함수 
사용법 :  1. import { vibrator } from '../functions/vibrator';
          2. vibrator  << 필요한 곳에 
*/
import { Vibration } from 'react-native';

const ONE_SECOND_IN_MS = 1000;

export const vibrationMaker = () => {
    Vibration.vibrate([500, 1000, 500, 2000]);
}