import {Character} from '../../../models/Character';
import {service} from '../../../services';

const getHeroes = async () => {
  const {data} = await service.get<Character[]>('heroes');
  return data;
};

export {getHeroes};
