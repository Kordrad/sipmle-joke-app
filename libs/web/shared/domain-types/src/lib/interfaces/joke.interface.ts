import { GuidType } from '../types/guid.type';
import { JokeFormInterface } from './joke-form.interface';

export interface JokeInterface extends JokeFormInterface {
  id: GuidType;
}
