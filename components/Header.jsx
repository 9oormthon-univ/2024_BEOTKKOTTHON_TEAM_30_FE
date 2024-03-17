import { Image, View } from "react-native";
import logoImage from '../assets/behindu-logo.png';

export default function Header() {
  
    return (
    <View className="flex mt-11 items-center">
      <Image className="pt-3" source={logoImage} />
    </View>
  );
}
