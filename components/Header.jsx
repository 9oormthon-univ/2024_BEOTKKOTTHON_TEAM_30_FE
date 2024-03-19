import { Image, View } from "react-native";
import logoImage from '../assets/behindu-logo.png';

export default function Header() {
  
    return (
    <View className="flex mt-[44px] items-center">
      <Image className="my-[12px]" source={logoImage} />
    </View>
  );
}
