import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Back from '../assets/back.svg';
import {Text} from '../../../components/Text';
import LinearGradient from 'react-native-linear-gradient';
import {API_HOST} from '@env';

interface CharacterProps {
  background: string;
  onBack(): void;
}

const Character = ({background, onBack}: CharacterProps) => {
  return (
    <ImageBackground
      source={{uri: `${API_HOST}${background}`}}
      style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity style={styles.header} onPress={onBack}>
        <Back />
      </TouchableOpacity>
      <LinearGradient
        style={styles.gradient}
        colors={[
          '#00000000',
          '#00000000',
          '#000000dd',
          '#000000ff',
          '#000',
          '#000',
        ]}>
        <Text style={{color: '#fff'}}>ABC</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export {Character};
