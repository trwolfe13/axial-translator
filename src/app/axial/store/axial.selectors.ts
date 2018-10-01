import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AxialState } from './axial.state';

export const axialFeature = 'dashboard';
const axial = createFeatureSelector<AxialState>(axialFeature);

const allGlyphs = createSelector(axial, (state: AxialState) => state.glyphs);

const filteredGlyphs = createSelector(axial, (state: AxialState) =>
  state.glyphs.filter(g => g.meanings.some(m => m.includes(String(state.filter).toLowerCase()))));

const filter = createSelector(axial, (state: AxialState) => state.filter);

export const selectors = {
  allGlyphs,
  filteredGlyphs,
  filter
};
