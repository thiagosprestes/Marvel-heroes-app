import {CategoryType} from './CategoryType';
import {Character} from './Character';

interface CharacterList {
  [CategoryType.hero]: Character[];
  [CategoryType.villain]: Character[];
  [CategoryType.antihero]: Character[];
  [CategoryType.alien]: Character[];
  [CategoryType.human]: Character[];
}

export type {CharacterList};
