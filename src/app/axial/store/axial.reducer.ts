import * as Actions from './axial.actions';
import { AxialState } from './axial.state';

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
      return { ...state, glyphs: action.glyphs };
    }
    default: {
      return state;
    }
  }
}
