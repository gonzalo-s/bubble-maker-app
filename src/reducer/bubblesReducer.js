import { types } from "../types/types";

export const bubblesReducer = (state = [], action) => {
  switch (action.type) {
    case types.addBubble:
      const newBubble = {
        color: action.payload.color,
        id: new Date().getTime(),
        size: action.payload.size,
      };
      return [...state, newBubble];
    case types.substractBubble:
      return state.slice(0, state.length - 1);
    case types.resetBubble:
      return [];

    default:
      return state;
  }
};
