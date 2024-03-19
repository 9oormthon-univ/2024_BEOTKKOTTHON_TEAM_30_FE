import {Text} from 'react-native';
import { HapticEngine } from 'react-native-core-haptics-api';

export default function HapticTest(){
  
  const hapticStart = async () => {

    const capabilities = await HapticEngine.getDeviceCapabilities();
      if (!capabilities.supportsHaptics) {
        throw new Error('Device does not support haptics');
      }
  
    const hapticEvent = {
      parameters: [{
        parametersID: {
          rawValue: "HapticIntencity"
        },
        value: 1,
      },{
        parametersID: {
          rawValue: "HapticSharpness",
        },
        value : 0.1
      }],
      eventType: {
        rawValue: "HapticContinuous"
      },
      duration: 0.5,
      relativeTime: 0
    }
  

    await HapticEngine.start(undefined);
    await HapticEngine.makePlayer(hapticEvent, undefined);
    let currentTime = 0.0;
    await HapticEngine.startPlayerAtTime(hapticEvent, currentTime, undefined);

    setTimeout(() => {
      HapticEngine.stop(undefined)
        .then(() => {
          console.error("ok");
        })
        .catch(stopError => {
          console.error(stopError);
        })
  }, 1000);

  };

  useEffect(() => {
    hapticStart()
      .then(() => {
        setResult("Finished playing example! :)");
      })
      .catch(() => {
        setResult("Unable to play example");
      })
  }, []);
  
  return (
    <View>
      <Text>haptic</Text>
    </View>
  );


/*
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
});*/

}