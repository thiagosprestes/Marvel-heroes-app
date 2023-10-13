import {Character} from '../../../models/Character';
import {service} from '../../../services';

const getHeroes = async () => {
  const {data} = await service.get<Character[]>('heroes');
  return data;
};

const getVillains = async () => {
  const {data} = await service.get<Character[]>('villains');
  return data;
};

const getAntiHeroes = async () => {
  const {data} = await service.get<Character[]>('antiheroes');
  return data;
};

const getAliens = async () => {
  const {data} = await service.get<Character[]>('aliens');
  return data;
};

const getHumans = async () => {
  const {data} = await service.get<Character[]>('humans');
  return data;
};

export {getHeroes, getVillains, getAntiHeroes, getAliens, getHumans};
