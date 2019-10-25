import React from 'react';

import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import Lottie from 'lottie-react-native';
import animation from '~/assets/animation/animation2.json';
import happeHalloween from '~/assets/images/happyhalloween.png';

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    margin: 30,
  },
  animation: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 0,
  },
  Button: {
    width: 300,
    height: 50,
    backgroundColor: '#7159c1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    marginBottom: 50,
  },
  Texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

const Page2 = ({ navigation }) => (
  <SafeAreaView style={styles.SafeAreaView}>
    <Image
      style={styles.image}
      autoSize
      resizeMode="contain"
      source={happeHalloween}
    />
    <View style={styles.animation}>
      <Lottie
        style={{ width: 400, height: 400 }}
        source={animation}
        resizeMode="contain"
        autoSize
        autoPlay
        loop
      />
    </View>
    <TouchableOpacity
      onPress={() => navigation.navigate('Page3')}
      style={styles.Button}>
      <Text style={styles.Texto}>Pagina 3...</Text>
    </TouchableOpacity>
  </SafeAreaView>
);

export default Page2;
