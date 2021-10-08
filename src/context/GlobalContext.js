import { createContext, useState } from "react";

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
  return (
    <GlobalContext.Provider value={initialState}>
      {children}
    </GlobalContext.Provider>
  );
};
