import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      id: "1",
      title: "Title 1",
      description: "Some description",
      done: false,
    },
    {
      id: "2",
      title: "Title 2",
      description: "Another description",
      done: false,
    },
    {
      id: "3",
      title: "Title 3",
      description: "Different description",
      done: true,
    },
  ],
};
export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: { ...task, id: v4() } });
  };

  const deleteTask = () => {
    dispatch({ type: "DELETE_TASK" });
  };

  return (
    <GlobalContext.Provider value={{ ...state, addTask, deleteTask }}>
      {children}
    </GlobalContext.Provider>
  );
};
