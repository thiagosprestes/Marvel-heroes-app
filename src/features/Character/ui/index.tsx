import React from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Back from '../assets/back.svg';
import Age from '../assets/age.svg';
import Weight from '../assets/weight.svg';
import Height from '../assets/height.svg';
import Universe from '../assets/universe.svg';
import {Text, TextSize} from '../../../components/Text';
import LinearGradient from 'react-native-linear-gradient';
import {API_HOST} from '@env';
import {Character as CharacterModel} from '../../../models/Character';

interface CharacterProps {
  character: CharacterModel;
  onBack(): void;
}

const Character = ({character, onBack}: CharacterProps) => {
  const numOfBars = 45;

  const getAge = () => {
    const actualYear = new Date().getFullYear();
    const birthYear = character.caracteristics.birth;

    const age = actualYear - Number(birthYear);

    return `${age} anos`;
  };

  const renderAbilityBarColor = (item: number, abilityLevel: number) => {
    const shouldRenderAbilityBar =
      item <= Math.round((abilityLevel * 45) / 100);

    return shouldRenderAbilityBar;
  };

  const abilityItem = (abilityName: string, abilityLevel: number) => {
    return (
      <View style={styles.ability}>
        <Text style={[styles.textWhite, styles.abilityLabel]}>
          {abilityName}
        </Text>
        <View style={styles.abilityBarContainer}>
          {Array(numOfBars)
            .fill('')
            .map((index, item) => (
              <View
                style={[
                  styles.abilityBar,
                  renderAbilityBarColor(item, abilityLevel)
                    ? styles.abilityBarWhite
                    : styles.abilityBarDark,
                ]}
                key={item}
              />
            ))}
        </View>
      </View>
    );
  };

  const renderMovies = ({item}: {item: string}) => (
    <Image
      source={{
        uri: `${API_HOST}/${item}`,
      }}
      style={styles.movie}
    />
  );

  return (
    <ScrollView contentContainerStyle={styles.flexGrow} style={styles.scroll}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={{uri: `${API_HOST}${character.imagePath}`}}
        imageStyle={styles.imageBackground}>
        <LinearGradient
          style={styles.flexOne}
          colors={['#00000000', '#000', '#000', '#000']}>
          <TouchableOpacity style={styles.header} onPress={onBack}>
            <Back />
          </TouchableOpacity>
          <View style={styles.content}>
            <View style={styles.nameContainer}>
              <Text style={styles.textWhite} size={TextSize.medium}>
                {character.alterEgo}
              </Text>
              <Text style={styles.name} size={TextSize.largeTitle}>
                {character.name}
              </Text>
            </View>
            <View style={styles.flexOne}>
              <View style={styles.infoContainer}>
                <View style={styles.info}>
                  <Age />
                  <Text style={[styles.textWhite, styles.infoLabel]}>
                    {getAge()}
                  </Text>
                </View>
                <View style={styles.info}>
                  <Weight />
                  <Text style={[styles.textWhite, styles.infoLabel]}>
                    {character.caracteristics.weight.value}kg
                  </Text>
                </View>
                <View style={styles.info}>
                  <Height />
                  <Text style={[styles.textWhite, styles.infoLabel]}>
                    {character.caracteristics.height.value.toFixed(2)}m
                  </Text>
                </View>
                <View style={styles.info}>
                  <Universe />
                  <Text style={[styles.textWhite, styles.infoLabel]}>
                    {character.caracteristics.universe}
                  </Text>
                </View>
              </View>
              <Text style={styles.biography}>{character.biography}</Text>
              <View style={styles.otherInfoContainer}>
                <Text
                  style={[styles.textWhite, styles.subtitle]}
                  size={TextSize.large}>
                  Habilidades
                </Text>
                {abilityItem('Força', character.abilities.force)}
                {abilityItem('Inteligência', character.abilities.intelligence)}
                {abilityItem('Agilidade', character.abilities.agility)}
                {abilityItem('Resistência', character.abilities.endurance)}
                {abilityItem('Velocidade', character.abilities.velocity)}
              </View>
            </View>
          </View>
          <View style={styles.otherInfoContainer}>
            <Text
              style={[styles.textWhite, styles.subtitle, styles.moviesLabel]}
              size={TextSize.large}>
              Filmes
            </Text>
            <FlatList
              data={character.movies}
              renderItem={renderMovies}
              keyExtractor={item => item}
              contentContainerStyle={styles.movies}
              horizontal
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
};

export {Character};
