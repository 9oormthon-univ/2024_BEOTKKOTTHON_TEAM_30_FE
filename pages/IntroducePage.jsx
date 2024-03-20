import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import backgroungIMG from '../assets/backgrounds/introduce.png';
import Header from '../components/defaults/Header';
import AssignHeader from '../components/defaults/Header';

const {width, height} = Dimensions.get('window');

export default function IntroducePage() {
  return (
    <>
      
      <View style={styles.container}>
      
        <Image source={backgroungIMG} style={styles.backgroundImage} />
        <Header back="home" />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            안녕하세요{'\n'}
            저는 청각장애인입니다.
          </Text>
          <Text style={styles.subText}>무슨 일이신가요?</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    fontSize: Dimensions.get('window').width / 13,
    fontWeight: 'bold',
    marginBottom: 10,
    lineHeight: 43,
  },
  subText: {
    fontSize: Dimensions.get('window').width / 24,
    color: 'gray',
  },
  headerContainer: {
    width: '100%',
    position: 'absolute', // Header를 화면의 상단에 고정
    top: 30, // 상단 부터의 거리
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIconContainer: {
    position: 'absolute',
    left: 20,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  logo: {
    width: Dimensions.get('window').width / 4,
    height: 40,
    resizeMode: 'contain',
  },
});
