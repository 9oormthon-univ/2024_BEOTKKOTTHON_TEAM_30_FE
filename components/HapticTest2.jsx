import { NativeModules, TouchableOpacity, Text } from 'react-native';

export default function HapticTest(){
  
    const { CHHapticEvent } = NativeModules;
    const vibrationPattern = [1.0, 2.0, 1.0, 0.5, 1.0];

    let pattern = [];
    
    let currentTime = 0.0;
    vibrationPattern.forEach(duration => {
        if (duration > 0) {
            // 진동 이벤트 추가
            pattern.push({
                [CHHapticEvent.Key.event]: {
                    [CHHapticEvent.Key.eventType]: CHHapticEvent.EventType.hapticTransient,  
                    [CHHapticEvent.Key.time]: CHHapticEvent.TimeImmediate + currentTime,
                    [CHHapticEvent.Key.eventDuration]: duration
                }
            });
        }
        // 시간 업데이트
        currentTime += duration;
    });
    
    const hapticPattern = {
        [CHHapticEvent.Key.pattern]: pattern
    };

    // 버튼 눌렀을 때 햅틱 실행 함수
    const onPressButton = () => {
        //진동 패턴 실행
        CHHapticEvent.triggerCustomHapticWithPattern(hapticPattern);
    };

    return (
        <TouchableOpacity onPress={onPressButton}>
            <Text>Press me</Text>
        </TouchableOpacity>
    );


};


