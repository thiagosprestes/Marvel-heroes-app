import React, {useEffect} from 'react';
import {Character} from './ui';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RoutesParams} from '../../routes/routes';

type CharacterProps = NativeStackScreenProps<RoutesParams, 'App.Character'>;

const CharacterScreen = ({navigation, route}: CharacterProps) => {
  const {imagePath} = route.params.character;

  const handleOnBack = () => navigation.goBack();

  return <Character background={imagePath} onBack={handleOnBack} />;
};

export {CharacterScreen};
