import { GuidType } from '../types/guid.type';

export interface JokeInterface {
  id: GuidType;
  category: GuidType;
  content: string;
}
