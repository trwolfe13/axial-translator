import * as Actions from './axial.actions';
import { AxialState } from './axial.state';
import { expandLines } from '@ax/axial/utils';

export const initialState: AxialState = {
  filter: '',
  glyphs: [],
};

export function axialReducer(state: AxialState = initialState, action: Actions.AxialAction): AxialState {
  switch (action.type) {
    case Actions.SetFilter.TYPE: {
      return { ...state, filter: action.filter };
    }
    case Actions.SetGlyphs.TYPE: {
      const glyphs = action.glyphs.map(g => ({ ...g, lines: expandLines(g.symbol) }));
      return { ...state, glyphs };
    }
    default: {
      return state;
    }
  }
}
