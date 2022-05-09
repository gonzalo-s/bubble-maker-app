import { types } from "../types/types";

export const defaultUser = {
  name: "",
  email: "",
  password: "",
  isLogged: false,
};

export const authReducer = (state = defaultUser, action) => {
  switch (action.type) {
    case types.login:
      return {
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        isLogged: true,
      };
    case types.logout:
      return defaultUser;

    default:
      return state;
  }
};
