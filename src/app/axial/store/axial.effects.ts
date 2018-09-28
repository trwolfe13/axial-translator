import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, mergeMap } from 'rxjs/operators';

import * as Axial from './axial.actions';

@Injectable()
export class AxialEffects {
  constructor(private actions: Actions<Action>, private http: HttpClient) { }

  @Effect() loadCreatures = this.actions
    .pipe(
      ofType<Axial.LoadGlyphs>(Axial.LoadGlyphs.TYPE),
      mergeMap(() => this.http.get<any[]>('assets/glyphs.json').pipe(
        map(data => new Axial.SetGlyphs(data))
      ))
    );
}
