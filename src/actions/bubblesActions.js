import { types } from "../types/types";

export const addBubble = (color, size = "90px") => {
  return {
    type: types.addBubble,
    payload: { color, size },
  };
};
export const substractBubble = () => {
  return {
    type: types.substractBubble,
  };
};
export const resetBubble = () => {
  return {
    type: types.resetBubble,
  };
};
