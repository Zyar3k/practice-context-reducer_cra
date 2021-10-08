import { createContext } from "react";

export const GlobalContext = createContext({
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
});
