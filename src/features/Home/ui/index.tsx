import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {Character} from '../../../models/Character';
import {colors} from '../../../utils/styleguide/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Text, TextSize} from '../../../components/Text';

interface HomeProps {
  characters: Character[];
}

const Home = ({characters}: HomeProps) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container} />
    </SafeAreaView>
  );
};

export {Home};
