import { PokeStates } from './poke.states';
import { createReducer, on } from '@ngrx/store';
import {
  getPokeListByGen,
  getPokeListByGenFailure,
  getPokeListByGenSuccess,
} from './poke.actions';

export const initialState: PokeStates = {
  list: [],
  loading: false,
  error: '',
};

export const pokeReducer = createReducer(
  initialState,
  on(getPokeListByGen, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(getPokeListByGenSuccess, (state, { pokeList }) => {
    return {
      ...state,
      list: pokeList,
      loading: false,
    };
  }),
  on(getPokeListByGenFailure, (state, { error }) => {
    return {
      ...state,
      error: error,
      loading: false,
    };
  }),
);
