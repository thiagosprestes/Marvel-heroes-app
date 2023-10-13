import React from 'react';
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {Text, TextSize} from '../../../../components/Text';
import {Character} from '../../../../models/Character';
import LinearGradient from 'react-native-linear-gradient';
import {API_HOST} from '@env';

interface CharactersListProps {
  title: string;
  characters: Character[];
  onSelectCharacter(character: Character): void;
}

const CharactersList = ({
  title,
  characters,
  onSelectCharacter,
}: CharactersListProps) => {
  const renderItem = ({item}: {item: Character}) => (
    <TouchableOpacity onPress={() => onSelectCharacter(item)}>
      <ImageBackground
        source={{uri: `${API_HOST}${item.imagePath}`}}
        style={styles.characterImage}
        imageStyle={styles.characterImageBackground}
        resizeMethod="resize">
        <LinearGradient
          colors={['#00000000', '#00000000', '#000000']}
          style={styles.characterImageGradient}>
          <Text size={TextSize.small} style={styles.characterAlterEgo}>
            {item.alterEgo}
          </Text>
          <Text size={TextSize.smallTitle} style={styles.characterName}>
            {item.name}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle} size={TextSize.large}>
          {title}
        </Text>
        <Text style={styles.seeMore}>Ver tudo</Text>
      </View>
      <FlatList
        data={characters}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.charactersList}
      />
    </View>
  );
};

export {CharactersList};
