/*
진동 생성 함수 
사용법 :  1. import { vibrator } from '../functions/vibrator';
          2. vibrator  << 필요한 곳에 
*/
import { Vibration } from 'react-native';

const ONE_SECOND_IN_MS = 1000;

export const vibrator = () => {


    //빠르게 3번 이어서

    const PATTERN = [
        0.1 * ONE_SECOND_IN_MS
    ];

    Vibration.vibrate(PATTERN, true);

    setTimeout(() => {
        Vibration.cancel();
    }, 1500);
}