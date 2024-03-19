import { View, StyleSheet,Image, Dimensions,Text } from "react-native";
import backgroungIMG from "../assets/backContent.png"
import Header from "./Header";

const { width, height } = Dimensions.get('window');

export default function Introduce() {

    return(
        <View style={styles.container}>
            <Image source={backgroungIMG} style={styles.backgroundImage} />
            <Header />
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    안녕하세요{"\n"}
                    저는 청각장애인입니다.
                </Text>
                <Text style={styles.subText}>무슨 일이신가요?</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        width: width,
        height: height,
        resizeMode: 'cover',
        position: 'absolute',
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
    },
    text: {
        textAlign: 'center',
        fontSize: '30%',
        fontWeight: 'bold',
        marginBottom:10,
        lineHeight: 43,
    },
    subText: {
        fontSize: 15,
        color: 'gray',
    },
});
