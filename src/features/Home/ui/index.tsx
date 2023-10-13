import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from './styles';
import Sidebar from '../assets/sidebar.svg';
import Search from '../assets/search.svg';

import {Character} from '../../../models/Character';
import {Text, TextSize} from '../../../components/Text';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../utils/styleguide/colors';
import {CharactersList} from '../components/CharactersList';
import {Category} from '../../../models/Category';
import {CategoryType} from '../../../models/CategoryType';

interface HomeProps {
  heroes: Character[];
  villains: Character[];
  antiheroes: Character[];
  aliens: Character[];
  humans: Character[];
  categories: Category[];
  onSelectCharacter(character: Character): void;
}

interface CategoryGradient {
  [key: string]: {
    top: string;
    bottom: string;
  };
}

const Home = ({
  heroes,
  villains,
  antiheroes,
  aliens,
  humans,
  categories,
  onSelectCharacter,
}: HomeProps) => {
  const categoryGradient: CategoryGradient = {
    [CategoryType.hero]: {
      top: colors.gradientBlue.top,
      bottom: colors.gradientBlue.bottom,
    },
    [CategoryType.villain]: {
      top: colors.gradientRed.top,
      bottom: colors.gradientRed.bottom,
    },
    [CategoryType.antihero]: {
      top: colors.gradientPurple.top,
      bottom: colors.gradientPurple.bottom,
    },
    [CategoryType.alien]: {
      top: colors.gradientGreen.top,
      bottom: colors.gradientGreen.bottom,
    },
    [CategoryType.human]: {
      top: colors.gradientPink.top,
      bottom: colors.gradientPink.bottom,
    },
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.header}>
          <Sidebar />
          <Search />
        </View>
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.subtitle}>Bem vindo ao Marvel Heroes</Text>
            <Text size={TextSize.largeTitle} style={styles.title}>
              Escolha o seu personagem
            </Text>
            <View style={styles.categories}>
              {categories.map(item => (
                <LinearGradient
                  colors={[
                    categoryGradient[item.name]?.top,
                    categoryGradient[item.name]?.bottom,
                  ]}
                  key={item.name}
                  style={styles.category}>
                  {item.icon}
                </LinearGradient>
              ))}
            </View>
          </View>
          <CharactersList
            title="Heróis"
            characters={heroes}
            onSelectCharacter={onSelectCharacter}
          />
          <CharactersList
            title="Vilões"
            characters={villains}
            onSelectCharacter={onSelectCharacter}
          />
          <CharactersList
            title="Anti-heróis"
            characters={antiheroes}
            onSelectCharacter={onSelectCharacter}
          />
          <CharactersList
            title="Alienigenas"
            characters={aliens}
            onSelectCharacter={onSelectCharacter}
          />
          <CharactersList
            title="Humanos"
            characters={humans}
            onSelectCharacter={onSelectCharacter}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export {Home, CategoryType};
