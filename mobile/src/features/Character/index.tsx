import React from 'react';
import {Character} from './ui';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RoutesParams} from '../../routes/routes';

type CharacterProps = NativeStackScreenProps<RoutesParams, 'App.Character'>;

const CharacterScreen = ({navigation, route}: CharacterProps) => {
  const {character} = route.params;

  const handleOnBack = () => navigation.goBack();

  return <Character onBack={handleOnBack} character={character} />;
};

export {CharacterScreen};
