import {Character as CharacterModel} from '../models/Character';

enum RoutesName {
  Home = 'App.Home',
  Character = 'App.Character',
}

type RoutesParams = {
  'App.Home': undefined;
  'App.Character': {
    character: CharacterModel;
  };
};

export {RoutesName};
export type {RoutesParams};
