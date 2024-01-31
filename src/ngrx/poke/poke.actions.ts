import { createAction, props } from '@ngrx/store';
import { PokeList } from '../models/poke.model';

export const getPokeListByGen = createAction(
  '[Poke] Get Poke List',
  props<{ gen: string }>(),
);

export const getPokeListByGenSuccess = createAction(
  '[Poke] Get Poke List Success',
  props<{ pokeList: PokeList[] }>(),
);

export const getPokeListByGenFailure = createAction(
  '[Poke] Get Poke List Failure',
  props<{ error: string }>(),
);
