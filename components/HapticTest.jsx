import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {NativeModules} from 'react-native';

const {CoreHapticsModule} = NativeModules;

export default function HapticTest(){
  
  // 햅틱 이벤트 생성 함수
  function createVibrationEvent(relativeTime) {
    return {
      eventType: 'transient',
      parameters: {},
      relativeTime,
    };
  }

  // 햅틱 패턴 생성
  const pattern = [2, 1, 1];
  const events = pattern.map((duration, index) =>createVibrationEvent(index === 0 ? 0 : pattern.slice(0, index).reduce((acc, curr) => acc + curr, 0)));
  const hapticPattern = {
    events,
    parameters: {},
  };

  // 버튼 눌렀을 때 햅틱 실행 함수
  const onPressButton = () => {
    CoreHapticsModule.triggerCustomHapticWithPattern(hapticPattern);
  };

  
  return (
    <TouchableOpacity onPress={onPressButton} style={styles.button}>
      <Text style={styles.buttonText}>Press me</Text>
    </TouchableOpacity>
  );


const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

};


