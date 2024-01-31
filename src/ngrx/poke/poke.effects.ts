import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokeService } from '../../app/services/poke.service';
import * as PokeActions from '../poke/poke.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class PokeEffects {
  constructor(
    private action: Actions,
    private pokeService: PokeService,
  ) {}

  $getPoke = createEffect(() =>
    this.action.pipe(
      ofType(PokeActions.getPokeListByGen),
      switchMap((action) =>
        this.pokeService.getPokeList(action.gen).pipe(
          map((poke: any) =>
            PokeActions.getPokeListByGenSuccess({
              pokeList: poke['pokemon_species'],
            }),
          ),
          catchError((error) =>
            of(PokeActions.getPokeListByGenFailure({ error })),
          ),
        ),
      ),
    ),
  );
}
