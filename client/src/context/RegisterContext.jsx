/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  user: null,
  error: null,
  loading: null,
};

export const RegisterContext = createContext(INITIAL_STATE);

const RegisterReducer = (state, action) => {
  switch (action.type) {
    case "REGISTRATION_START":
      return {
        user: null,
        error: null,
        loading: true,
      };
    case "REGISTRATION_SUCCESSFUL":
      return {
        user: action.payload,
        error: null,
        loading: false,
      };
    case "REGISTRATION_FAILURE":
      return {
        user: null,
        error: action.payload,
        loading: false,
      };
    default:
      return INITIAL_STATE;
  }
};

export const RegisterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RegisterReducer, INITIAL_STATE);

  return (
    <RegisterContext.Provider
      value={{
        user: state.user,
        error: state.error,
        loading: state.loading,
        dispatch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
