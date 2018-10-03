import { Glyph } from '@ax/axial/models';
import { related } from '@ax/axial/utils';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as _ from 'lodash';

import { AxialState } from './axial.state';

export const axialFeature = 'dashboard';
const axial = createFeatureSelector<AxialState>(axialFeature);

const allGlyphs = createSelector(axial, (state: AxialState) => state.glyphs);

const filteredGlyphs = createSelector(axial, (state: AxialState) => {
  const glyphFilter = String(state.filter).toLowerCase();
  const glyphs = state.glyphs.filter(g => {
    return g.meanings.some(m => m.includes(glyphFilter));
  });
  return _.orderBy(glyphs, g => g.meanings[0]);
});

const filter = createSelector(axial, (state: AxialState) => state.filter);

const glyphByName = (name: string) => createSelector(axial, (state: AxialState) => {
  // Begin with primary meaning, exact match.
  let parentGlyph = state.glyphs.find(f => f.meanings[0] === name.toLowerCase());
  // Secondary meaning, exact match.
  if (!parentGlyph) {
    parentGlyph = state.glyphs.find(f => f.meanings.some(m => m === name.toLowerCase()));
  }
  return parentGlyph;
});

const relatedGlyphs = (glyph: Glyph) => createSelector(axial, (state: AxialState) => {
  return glyph ? related(glyph, state.glyphs) : [];
});

export const selectors = {
  allGlyphs,
  filteredGlyphs,
  filter,
  glyphByName,
  relatedGlyphs
};
