import {Abilities} from './Abilities';
import {Caracteristics} from './Caracteristics';

interface Character {
  name: string;
  alterEgo: string;
  imagePath: string;
  biography: string;
  caracteristics: Caracteristics;
  abilities: Abilities;
  movies: string[];
}

export type {Character};
