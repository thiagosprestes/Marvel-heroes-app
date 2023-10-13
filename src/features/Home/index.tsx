import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Home} from './ui';
import {getHeroes} from './services';
import {RoutesParams} from '../../routes/routes';
import {Character} from '../../models/Character';

interface HomeProps {
  navigation: NativeStackScreenProps<RoutesParams, 'App.Home'>;
}

const HomeScreen = ({navigation}: HomeProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharacters = async () => {
    try {
      const response = await getHeroes();
      setCharacters(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return <Home characters={characters} />;
};

export {HomeScreen};
