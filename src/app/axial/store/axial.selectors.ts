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

export const selectors = {
  allGlyphs,
  filteredGlyphs,
  filter
};
