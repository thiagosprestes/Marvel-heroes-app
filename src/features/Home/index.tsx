import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Category, CategoryType, CharacterList, Home} from './ui';
import {
  getAliens,
  getAntiHeroes,
  getHeroes,
  getHumans,
  getVillains,
} from './services';
import {RoutesParams} from '../../routes/routes';
import Hero from './assets/hero.svg';
import Villain from './assets/villain.svg';
import Antihero from './assets/antihero.svg';
import Alien from './assets/alien.svg';
import Human from './assets/human.svg';
import {Alert} from 'react-native';

interface HomeProps {
  navigation: NativeStackScreenProps<RoutesParams, 'App.Home'>;
}

const HomeScreen = ({navigation}: HomeProps) => {
  const [characters, setCharacters] = useState<CharacterList>(
    {} as CharacterList,
  );

  const categories: Category[] = [
    {name: CategoryType.hero, icon: <Hero />},
    {name: CategoryType.villain, icon: <Villain />},
    {name: CategoryType.antihero, icon: <Antihero />},
    {name: CategoryType.alien, icon: <Alien />},
    {name: CategoryType.human, icon: <Human />},
  ];

  const getCharacters = async () => {
    try {
      const response = await Promise.all([
        getHeroes(),
        getVillains(),
        getAntiHeroes(),
        getAliens(),
        getHumans(),
      ]);

      setCharacters({
        [CategoryType.hero]: response[0],
        [CategoryType.villain]: response[1],
        [CategoryType.antihero]: response[2],
        [CategoryType.alien]: response[3],
        [CategoryType.human]: response[4],
      });
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Erro desconhecido',
        'Ocorreu um erro ao listar os personagens',
      );
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Home
      heroes={characters[CategoryType.hero]}
      villains={characters[CategoryType.villain]}
      antiheroes={characters[CategoryType.antihero]}
      aliens={characters[CategoryType.alien]}
      humans={characters[CategoryType.human]}
      categories={categories}
    />
  );
};

export {HomeScreen};
