import { View, Text, Pressable, TextBase } from 'react-native';
import { HapticEngine } from 'react-native-core-haptics-api';

export default function HapticTest(){
  
  const hapticStart = async () => {

    const capabilities = await HapticEngine.getDeviceCapabilities();
      if (!capabilities.supportsHaptics) {
        throw new Error('Device does not support haptics');
      }

    const hapticEvent = {};
    hapticEvent.duration = 0.5;
    hapticEvent.relativeTime = 0;
    hapticEvent.eventType = { rawValue: "HapticContinuous" };

    const parameters = [];

    const intensityParameter = {
        parameterID: { rawValue: "HapticIntensity" },
        value: 1
    };
    parameters.push(intensityParameter);

    const sharpnessParameter = {
        parameterID: { rawValue: "HapticSharpness" },
        value: 0.6
    };
    parameters.push(sharpnessParameter);

    hapticEvent.parameters = parameters;

    const hapticEvents = [hapticEvent];

    const pattern = {
        hapticEvents
    };
  
    /*const hapticEvent = {
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
  
*/
    await HapticEngine.start(undefined);
    await HapticEngine.makePlayer(pattern, undefined);
    let currentTime = 0.0;
    await HapticEngine.startPlayerAtTime(pattern, currentTime, undefined);

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

  
  return (
    <View>
      <Pressable onPressIn={() => hapticStart()}>
        <Text>Press me!</Text>
      </Pressable>
    </View>
  );


}