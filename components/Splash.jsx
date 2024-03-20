import { React, Image, StyleSheet, Dimensions,View,Text, Button } from 'react-native';
import backgroundImage from '../assets/SplahBackground.png';
import logo from '../assets/logo-bigger.png';

const { width, height } = Dimensions.get('window');

export default function Splash() {


    return(
        <View style={styles.container}>
        <Image source={backgroundImage} style={styles.backgroundImage} />
        <View style={styles.overlay}>
            <Image source={logo} style={styles.centeredImage} />
            <Text style={styles.centeredText}>당신 곁에 들리는 소리</Text>
        </View>
    </View>
    )

    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredImage: {
        width: '45%', 
        resizeMode: 'contain',
        marginBottom: 20,
    },
    centeredText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight:500,
    },
  });