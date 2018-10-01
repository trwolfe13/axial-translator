import { Action } from '@ngrx/store';
import { Glyph } from '@ax/axial/models';

export class LoadGlyphs implements Action {
  public static readonly TYPE = '[Axial] Load Glyphs';
  readonly type = LoadGlyphs.TYPE;
  constructor() { }
}

export class SetGlyphs implements Action {
  public static readonly TYPE = '[Axial] Set Glyphs';
  readonly type = SetGlyphs.TYPE;
  constructor(public glyphs: Glyph[]) { }
}

export class SetFilter implements Action {
  public static readonly TYPE = '[Axial] Set Filter';
  readonly type = SetFilter.TYPE;
  constructor(public filter: string) { }
}

export type AxialAction = LoadGlyphs | SetGlyphs | SetFilter;
