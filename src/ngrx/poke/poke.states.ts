import { PokeList } from '../models/poke.model';

export interface PokeStates {
  list: PokeList[];
  loading: boolean;
  error: string;
}
