import { types } from "../types/types";

export const login = (name, email, password) => {
  return {
    type: types.login,
    payload: { name, email, password },
  };
};
export const logout = () => {
  return {
    type: types.logout,
  };
};
