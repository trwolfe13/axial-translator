import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AxialState } from './axial.state';

export const axialFeature = 'dashboard';
const axial = createFeatureSelector<AxialState>(axialFeature);

const glyphs = createSelector(axial, (state: AxialState) => state.glyphs);

export const selectors = {
  glyphs
};
