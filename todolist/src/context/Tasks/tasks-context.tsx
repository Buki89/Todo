import React, { createContext, FC, useContext, useReducer } from "react";
import Reducer, { Actions, State } from "../../reducer";
import { mockData } from "./__mock";

type IContextProps = {
  state: State;
  dispatch: React.Dispatch<Actions>;
};

const initialState = {
  tasks: mockData,
  uid: "",
} as State;

export const Store = createContext({} as IContextProps);

const useTasksContext = (): IContextProps => useContext(Store);

const TaskProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export { TaskProvider, useTasksContext };
