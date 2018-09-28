import * as Actions from './axial.actions';
import { AxialState } from './axial.state';

export const initialState: AxialState = {
  glyphs: [],
};

export function axialReducer(state: AxialState = initialState, action: Actions.AxialAction): AxialState {
  switch (action.type) {
    case Actions.SetGlyphs.TYPE: {
      return { ...state, glyphs: action.glyphs };
    }
    default: {
      return state;
    }
  }
}
