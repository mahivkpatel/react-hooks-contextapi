import React, { useReducer, createContext } from "react";

export const AuthorContext = createContext();

const initialState = {
  authors: [
    {
      id: "1",
      authorName: "Test1 Demo",
      bookName: "data1",
      email: "test1@test.com",
    },
    {
      id: "2",
      authorName: "Test2 Demo",
      bookName: "data2",
      email: "test2@test.com",
    },
    {
      id: "1",
      authorName: "Test3 Demo",
      bookName: "data3",
      email: "test3@test.com",
    },
  ],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        authors: [...state.authors, action.payload],
      };
    case "DEL_CONTACT":
      return {
        authors: state.authors.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "START":
      return {
        loading: true,
      };
    case "COMPLETE":
      return {
        loading: false,
      };
    default:
      throw new Error();
  }
};

export const AuthorContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthorContext.Provider value={[state, dispatch]}>
      {props.children}
    </AuthorContext.Provider>
  );
};
